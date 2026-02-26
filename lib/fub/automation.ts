/**
 * Follow Up Boss Automation Utilities
 * 
 * Common automation tasks:
 * - Lead sync from external sources
 * - Bulk operations
 * - Stage progression
 * - Auto-tagging
 * - Report generation
 */

import { FollowUpBossClient, FUBPerson, FUBListOptions } from './client';

export class FUBAutomation {
  private client: FollowUpBossClient;

  constructor(apiKey: string, systemKey?: string) {
    this.client = new FollowUpBossClient({
      apiKey,
      systemKey,
    });
  }

  /**
   * Sync leads from external source (e.g., Zillow, Realtor.com)
   */
  async syncLeadsFromSource(
    leads: Array<{
      name: string;
      email?: string;
      phone?: string;
      source: string;
      message?: string;
      [key: string]: any;
    }>
  ): Promise<{
    created: number;
    updated: number;
    failed: number;
    errors: string[];
  }> {
    const results = {
      created: 0,
      updated: 0,
      failed: 0,
      errors: [] as string[],
    };

    for (const lead of leads) {
      try {
        // Check if lead exists
        const existing = await this.client.findPerson({
          email: lead.email,
          phone: lead.phone,
        });

        // Upsert lead
        const person = await this.client.upsertPerson({
          name: lead.name,
          emails: lead.email ? [{ value: lead.email }] : undefined,
          phones: lead.phone ? [{ value: lead.phone }] : undefined,
          source: lead.source,
          customFields: {
            ...lead,
            syncedAt: new Date().toISOString(),
          },
        });

        // Add source tag
        await this.client.addTag(person.id, lead.source);

        // Create event if message provided
        if (lead.message) {
          await this.client.createEvent({
            source: lead.source,
            type: 'Inbound Lead',
            message: lead.message,
            personId: person.id,
          });
        }

        if (existing) {
          results.updated++;
        } else {
          results.created++;
        }
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Failed to sync ${lead.name}: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    }

    return results;
  }

  /**
   * Bulk add tags to people matching criteria
   */
  async bulkAddTag(
    options: FUBListOptions,
    tag: string
  ): Promise<{ processed: number; failed: number }> {
    let processed = 0;
    let failed = 0;

    for await (const person of this.client.getAllPeople(options)) {
      try {
        await this.client.addTag(person.id, tag);
        processed++;
      } catch (error) {
        failed++;
        console.error(`Failed to tag person ${person.id}:`, error);
      }
    }

    return { processed, failed };
  }

  /**
   * Bulk update stage for people matching criteria
   */
  async bulkUpdateStage(
    options: FUBListOptions,
    stage: string
  ): Promise<{ processed: number; failed: number }> {
    let processed = 0;
    let failed = 0;

    for await (const person of this.client.getAllPeople(options)) {
      try {
        await this.client.updateStage(person.id, stage);
        processed++;
      } catch (error) {
        failed++;
        console.error(`Failed to update stage for person ${person.id}:`, error);
      }
    }

    return { processed, failed };
  }

  /**
   * Auto-progress leads based on activity age
   */
  async progressStaleLeads(
    daysInactive: number = 30
  ): Promise<{ processed: number; moved: number }> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysInactive);

    let processed = 0;
    let moved = 0;

    // Get people updated before cutoff
    const people = await this.client.listPeople({
      updatedAfter: cutoffDate.toISOString(),
      limit: 100,
    });

    for (const person of people.people) {
      processed++;

      // Define stage progression rules
      const stageMap: Record<string, string> = {
        'New Lead': 'Cold Lead',
        'Contacted': 'Nurture',
        'Active Buyer': 'Nurture',
        'Active Seller': 'Nurture',
      };

      const newStage = stageMap[person.stage || ''];
      if (newStage) {
        try {
          await this.client.updateStage(person.id, newStage);
          await this.client.createEvent({
            source: 'automation',
            type: 'Stage Change',
            message: `Auto-moved to ${newStage} - ${daysInactive} days inactive`,
            personId: person.id,
          });
          moved++;
        } catch (error) {
          console.error(`Failed to progress person ${person.id}:`, error);
        }
      }
    }

    return { processed, moved };
  }

  /**
   * Find and merge duplicate leads
   */
  async findDuplicates(): Promise<Array<{
    email?: string;
    phone?: string;
    people: FUBPerson[];
  }>> {
    const duplicates: Array<{
      email?: string;
      phone?: string;
      people: FUBPerson[];
    }> = [];

    // Get all people
    const people: FUBPerson[] = [];
    for await (const person of this.client.getAllPeople({ limit: 100 })) {
      people.push(person);
    }

    // Group by email
    const emailGroups = new Map<string, FUBPerson[]>();
    for (const person of people) {
      if (person.emails && person.emails.length > 0) {
        const email = person.emails[0].value.toLowerCase();
        if (!emailGroups.has(email)) {
          emailGroups.set(email, []);
        }
        emailGroups.get(email)!.push(person);
      }
    }

    // Find email duplicates
    Array.from(emailGroups.entries()).forEach(([email, group]) => {
      if (group.length > 1) {
        duplicates.push({ email, people: group });
      }
    });

    // Group by phone
    const phoneGroups = new Map<string, FUBPerson[]>();
    for (const person of people) {
      if (person.phones && person.phones.length > 0) {
        const phone = person.phones[0].value.replace(/\D/g, '');
        if (!phoneGroups.has(phone)) {
          phoneGroups.set(phone, []);
        }
        phoneGroups.get(phone)!.push(person);
      }
    }

    // Find phone duplicates
    Array.from(phoneGroups.entries()).forEach(([phone, group]) => {
      if (group.length > 1) {
        const existingDup = duplicates.find(d => 
          d.people.some(p => group.some(g => g.id === p.id))
        );
        if (!existingDup) {
          duplicates.push({ phone, people: group });
        }
      }
    });

    return duplicates;
  }

  /**
   * Generate lead source report
   */
  async generateSourceReport(
    daysBack: number = 30
  ): Promise<Record<string, { count: number; percentage: number }>> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysBack);

    const people: FUBPerson[] = [];
    for await (const person of this.client.getAllPeople({
      createdAfter: cutoffDate.toISOString(),
      limit: 100,
    })) {
      people.push(person);
    }

    // Count by source
    const sourceCounts: Record<string, number> = {};
    for (const person of people) {
      const source = person.source || 'Unknown';
      sourceCounts[source] = (sourceCounts[source] || 0) + 1;
    }

    // Calculate percentages
    const total = people.length;
    const report: Record<string, { count: number; percentage: number }> = {};
    for (const [source, count] of Object.entries(sourceCounts)) {
      report[source] = {
        count,
        percentage: total > 0 ? (count / total) * 100 : 0,
      };
    }

    return report;
  }

  /**
   * Generate stage funnel report
   */
  async generateStageFunnel(): Promise<Record<string, number>> {
    const stageCounts: Record<string, number> = {};

    for await (const person of this.client.getAllPeople({ limit: 100 })) {
      const stage = person.stage || 'No Stage';
      stageCounts[stage] = (stageCounts[stage] || 0) + 1;
    }

    return stageCounts;
  }

  /**
   * Enrich lead with additional data
   */
  async enrichLead(
    personId: number,
    enrichmentData: {
      propertyValue?: number;
      homeOwner?: boolean;
      creditScore?: number;
      demographics?: Record<string, any>;
    }
  ): Promise<void> {
    const person = await this.client.getPerson(personId);

    // Update custom fields with enrichment data
    await this.client.upsertPerson({
      id: personId,
      customFields: {
        ...person.customFields,
        ...enrichmentData,
        enrichedAt: new Date().toISOString(),
      },
    });

    // Add event
    await this.client.createEvent({
      source: 'enrichment',
      type: 'Data Enrichment',
      message: `Lead enriched with additional data: ${Object.keys(enrichmentData).join(', ')}`,
      personId,
      data: enrichmentData,
    });
  }

  /**
   * Auto-assign leads based on criteria
   */
  async autoAssignLeads(
    criteria: FUBListOptions,
    assignToUserId: number
  ): Promise<{ assigned: number; failed: number }> {
    let assigned = 0;
    let failed = 0;

    for await (const person of this.client.getAllPeople(criteria)) {
      try {
        // FUB API doesn't have direct assignment endpoint
        // This would typically be done through custom fields or tags
        await this.client.createEvent({
          source: 'automation',
          type: 'Assignment',
          message: `Auto-assigned to user ${assignToUserId}`,
          personId: person.id,
          data: { assignedUserId: assignToUserId },
        });
        assigned++;
      } catch (error) {
        failed++;
        console.error(`Failed to assign person ${person.id}:`, error);
      }
    }

    return { assigned, failed };
  }

  /**
   * Clean up test leads
   */
  async cleanupTestLeads(): Promise<{ found: number; cleaned: number }> {
    const testPatterns = [
      'test',
      'demo',
      'example',
      'asdf',
      'qwerty',
      'john.doe@example.com',
    ];

    let found = 0;
    let cleaned = 0;

    for await (const person of this.client.getAllPeople({ limit: 100 })) {
      const name = (person.name || '').toLowerCase();
      const email = person.emails?.[0]?.value.toLowerCase() || '';

      const isTest = testPatterns.some(pattern => 
        name.includes(pattern) || email.includes(pattern)
      );

      if (isTest) {
        found++;
        
        try {
          // Add tag instead of deleting (safer)
          await this.client.addTag(person.id, 'test-lead');
          cleaned++;
        } catch (error) {
          console.error(`Failed to tag test lead ${person.id}:`, error);
        }
      }
    }

    return { found, cleaned };
  }
}
