/**
 * Follow Up Boss Webhook Handler
 *
 * Handles real-time events from FUB:
 * - peopleCreated
 * - peopleUpdated
 * - peopleDeleted
 * - peopleStageUpdated
 * - peopleTagsCreated
 *
 * Integrates with:
 * - Claude AI for lead qualification
 * - RealScout for property matching
 * - Email notifications
 */

import { NextRequest, NextResponse } from "next/server";
import {
  FollowUpBossClient,
  getFubApiKey,
  getFubSystemKey,
} from "@/lib/fub/client";
import { ClaudeClient } from "@/lib/claude/client";
import { propertySearchTemplate } from "@/lib/claude/prompt-templates";

function createFubClient(): FollowUpBossClient {
  const apiKey = getFubApiKey();
  if (!apiKey) {
    throw new Error("FUB_API_KEY_NOT_CONFIGURED");
  }
  return new FollowUpBossClient({
    apiKey,
    systemKey: getFubSystemKey(),
  });
}

export async function POST(request: NextRequest) {
  try {
    let body: { event?: string; data?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    if (!getFubApiKey()) {
      console.error("[FUB Webhook] Follow Up Boss API key is not configured");
      return NextResponse.json(
        { error: "Webhook processing failed" },
        { status: 500 },
      );
    }

    const { event, data } = body;

    console.log(`[FUB Webhook] Received event: ${event}`);

    // Verify webhook authenticity (optional but recommended)
    // const signature = request.headers.get('X-FUB-Signature');
    // if (!verifySignature(signature, body)) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
    // }

    // Route to appropriate handler
    switch (event) {
      case "peopleCreated":
        await handlePersonCreated(data);
        break;

      case "peopleUpdated":
        await handlePersonUpdated(data);
        break;

      case "peopleStageUpdated":
        await handleStageUpdated(data);
        break;

      case "peopleTagsCreated":
        await handleTagsCreated(data);
        break;

      case "peopleDeleted":
        await handlePersonDeleted(data);
        break;

      default:
        console.log(`[FUB Webhook] Unhandled event: ${event}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[FUB Webhook] Error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}

/**
 * Handle new person (lead) created
 */
async function handlePersonCreated(data: any) {
  console.log(`[FUB] New person created: ${data.name || data.id}`);

  const fub = createFubClient();

  try {
    // Get full person details
    const person = await fub.getPerson(data.id);

    // Auto-qualify lead with Claude AI
    if (process.env.ANTHROPIC_API_KEY) {
      await qualifyLeadWithAI(person, fub);
    }

    // Add welcome tag
    await fub.addTag(person.id, "website-lead");

    // Create event in FUB
    await fub.createEvent({
      source: "website",
      type: "Note",
      message: "New lead captured from website",
      personId: person.id,
      data: {
        source: person.source || "website",
        stage: person.stage || "new",
      },
    });

    // Send notification (implement your notification service)
    // await sendSlackNotification(`New lead: ${person.name}`);
    // await sendEmailNotification(person);
  } catch (error) {
    console.error("[FUB] Error processing new person:", error);
  }
}

/**
 * Handle person updated
 */
async function handlePersonUpdated(data: any) {
  console.log(`[FUB] Person updated: ${data.name || data.id}`);

  // Track what changed
  const changes = data.changes || {};

  // If email or phone changed, check for duplicates
  if (changes.emails || changes.phones) {
    await checkForDuplicates(data.id);
  }

  // If stage changed to "Active Buyer", trigger property search
  if (changes.stage === "Active Buyer") {
    await triggerPropertySearch(data.id);
  }
}

/**
 * Handle stage updated
 */
async function handleStageUpdated(data: any) {
  console.log(`[FUB] Stage updated for ${data.name || data.id}: ${data.stage}`);

  const fub = createFubClient();

  try {
    // Add stage-specific tags and actions
    switch (data.stage) {
      case "Active Buyer":
        await fub.addTag(data.id, "active-buyer");
        await triggerPropertySearch(data.id);
        break;

      case "Active Seller":
        await fub.addTag(data.id, "active-seller");
        // Trigger home valuation workflow
        break;

      case "Under Contract":
        await fub.addTag(data.id, "under-contract");
        // Trigger pre-closing checklist
        break;

      case "Closed":
        await fub.addTag(data.id, "closed");
        // Trigger post-closing follow-up
        break;
    }

    // Log event
    await fub.createEvent({
      source: "automation",
      type: "Stage Change",
      message: `Stage updated to: ${data.stage}`,
      personId: data.id,
    });
  } catch (error) {
    console.error("[FUB] Error handling stage update:", error);
  }
}

/**
 * Handle tags created
 */
async function handleTagsCreated(data: any) {
  console.log(
    `[FUB] Tags added to ${data.name || data.id}: ${data.tags?.join(", ")}`,
  );

  const fub = createFubClient();

  // Trigger actions based on specific tags
  for (const tag of data.tags || []) {
    switch (tag.toLowerCase()) {
      case "summerlin":
      case "henderson":
      case "green valley":
        // Search for properties in that area
        await triggerPropertySearch(data.id, tag);
        break;

      case "luxury":
        await fub.createEvent({
          source: "automation",
          type: "Note",
          message: `Tagged as luxury buyer - recommend Ridges, Southern Highlands`,
          personId: data.id,
        });
        break;

      case "55+":
        await fub.createEvent({
          source: "automation",
          type: "Note",
          message: `Tagged as 55+ - recommend Sun City Summerlin, Sun City Anthem`,
          personId: data.id,
        });
        break;
    }
  }
}

/**
 * Handle person deleted
 */
async function handlePersonDeleted(data: any) {
  console.log(`[FUB] Person deleted: ${data.id}`);

  // Clean up any external integrations
  // await removeFromRealScout(data.id);
  // await removeFromMailingLists(data.id);
}

/**
 * Qualify lead with Claude AI
 */
async function qualifyLeadWithAI(person: any, fub: FollowUpBossClient) {
  try {
    const claude = new ClaudeClient({
      apiKey: process.env.ANTHROPIC_API_KEY!,
    });

    // Build context about the lead
    const context = `
New lead information:
- Name: ${person.name || "Unknown"}
- Source: ${person.source || "Unknown"}
- Stage: ${person.stage || "New"}
- Tags: ${person.tags?.join(", ") || "None"}
- Custom fields: ${JSON.stringify(person.customFields || {})}

Based on this information, provide a brief lead qualification summary and recommended next steps.
    `.trim();

    const response = await claude.sendMessage({
      messages: [{ role: "user", content: context }],
      systemPrompt: propertySearchTemplate.system,
      maxTokens: 500,
      enableCache: false, // Don't cache unique lead data
    });

    // Add AI qualification as note in FUB
    await fub.createEvent({
      source: "ai-assistant",
      type: "Note",
      message: `AI Lead Qualification:\n\n${response.content}`,
      personId: person.id,
      data: {
        aiQualification: true,
        cost: response.cost.total,
      },
    });

    console.log(`[FUB] AI qualification added for ${person.name}`);
  } catch (error) {
    console.error("[FUB] Error qualifying lead with AI:", error);
  }
}

/**
 * Check for duplicate leads
 */
async function checkForDuplicates(personId: number) {
  const fub = createFubClient();

  try {
    const person = await fub.getPerson(personId);

    // Search by email
    if (person.emails && person.emails.length > 0) {
      const duplicates = await fub.listPeople({
        email: person.emails[0].value,
        limit: 10,
      });

      if (duplicates.people.length > 1) {
        await fub.createEvent({
          source: "automation",
          type: "Note",
          message: `⚠️ Potential duplicate found - ${duplicates.people.length} contacts with this email`,
          personId,
        });
      }
    }

    // Search by phone
    if (person.phones && person.phones.length > 0) {
      const duplicates = await fub.listPeople({
        phone: person.phones[0].value,
        limit: 10,
      });

      if (duplicates.people.length > 1) {
        await fub.createEvent({
          source: "automation",
          type: "Note",
          message: `⚠️ Potential duplicate found - ${duplicates.people.length} contacts with this phone`,
          personId,
        });
      }
    }
  } catch (error) {
    console.error("[FUB] Error checking duplicates:", error);
  }
}

/**
 * Trigger property search
 */
async function triggerPropertySearch(personId: number, neighborhood?: string) {
  const fub = createFubClient();

  try {
    const person = await fub.getPerson(personId);

    // Extract search criteria from custom fields
    const budget = person.customFields?.budget;
    const bedrooms = person.customFields?.bedrooms;
    const bathrooms = person.customFields?.bathrooms;

    let searchNote = `Property search criteria:\n`;
    if (neighborhood) searchNote += `- Area: ${neighborhood}\n`;
    if (budget) searchNote += `- Budget: ${budget}\n`;
    if (bedrooms) searchNote += `- Bedrooms: ${bedrooms}\n`;
    if (bathrooms) searchNote += `- Bathrooms: ${bathrooms}\n`;

    // TODO: Integrate with RealScout to create saved search
    // await createRealScoutSearch(person, { neighborhood, budget, bedrooms, bathrooms });

    await fub.createEvent({
      source: "automation",
      type: "Property Search",
      message: searchNote,
      personId,
      data: {
        neighborhood,
        budget,
        bedrooms,
        bathrooms,
      },
    });

    console.log(`[FUB] Property search triggered for ${person.name}`);
  } catch (error) {
    console.error("[FUB] Error triggering property search:", error);
  }
}

/**
 * Verify webhook signature (implement if FUB provides signing)
 */
function verifySignature(signature: string | null, body: any): boolean {
  // Implement signature verification if FUB provides it
  // For now, rely on HTTPS and IP allowlisting
  return true;
}
