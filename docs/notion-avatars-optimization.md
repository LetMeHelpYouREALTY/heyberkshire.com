# Notion Optimization: Different Avatars with Different Skills

Use this setup so each **avatar** (persona/role) has a dedicated space and only the skills and info relevant to them.

---

## 1. Avatars database (single source of truth)

Create one **Avatars** database with:

| Property      | Type        | Purpose |
|---------------|-------------|--------|
| Name          | Title       | Avatar label (e.g. "Listing Agent", "Buyer Lead", "Investor") |
| Role          | Select      | e.g. Agent, Buyer, Seller, Investor, Admin |
| Skills        | Multi-select| Skills this avatar uses (e.g. Valuation, Search, CRM, Docs) |
| Dashboard     | URL         | Link to this avatar’s dashboard page |
| Description   | Text        | One-line purpose of this avatar |

**Best practice:** One row per avatar. Link this database from other DBs (Tasks, Projects) so you can filter by avatar.

---

## 2. One dashboard page per avatar

- Create a **parent page**: e.g. `Avatars & Dashboards`.
- Under it, create **one page per avatar**: e.g. `Listing Agent`, `Buyer Lead`, `Investor`.
- On each avatar page:
  - **Linked database views** of your main DBs (Tasks, Projects, etc.) with a **filter: Avatar = this avatar**.
  - Only the **properties and views** that avatar needs (hide the rest).
  - Short **instructions** or a **template** for that role.

So: one Avatars DB + one dashboard page per avatar, each showing only that avatar’s skills and work.

---

## 3. Tasks / projects tied to avatars

In your **Tasks** (or **Projects**) database, add:

| Property | Type    | Purpose |
|----------|---------|--------|
| Avatar   | Relation | Relation to **Avatars** database (which persona owns this) |
| Skill    | Select   | Optional: which skill area (Valuation, Search, CRM, etc.) |

Then:

- **Board view** grouped by **Avatar** (or by **Status** with Avatar as a visible property).
- **Per-avatar dashboards**: use linked views filtered by **Avatar = [this avatar]** so each avatar only sees their tasks.

---

## 4. Skills as tags (lightweight)

If you don’t need a full “Skills” DB:

- In **Avatars**, use **Skills** as **Multi-select** (e.g. `Valuation`, `Search`, `CRM`, `Docs`, `Reporting`).
- In **Tasks** (or **Projects**), add **Skill** (Select or Multi-select) with the same options.
- Filter linked views by **Skill** so each avatar’s dashboard shows only tasks for that avatar’s skills.

---

## 5. Cursor / AI: avatar-specific prompts

In Cursor (or any AI tool):

- **One rule or doc per avatar** (e.g. in `.cursor/rules/` or in Notion):
  - Name: `avatar-listing-agent.mdc`, `avatar-buyer-lead.mdc`, etc.
  - Content: “When acting as **Listing Agent**, prefer: [list skills, tone, constraints]. Use Notion views X, Y.”
- When you switch “who” you’re acting as, you can reference that avatar’s rule so the AI uses the right skills and Notion views.

---

## 6. Checklist: optimized for avatars + skills

- [ ] **Avatars** database with: Name, Role, Skills (multi-select), Dashboard link, Description.
- [ ] **One dashboard page per avatar** under a parent “Avatars & Dashboards” (or similar).
- [ ] **Tasks** (and optionally **Projects**) have **Avatar** relation and, if useful, **Skill** select.
- [ ] **Linked views** on each avatar dashboard filtered by **Avatar** (and optionally **Skill**).
- [ ] **Unused properties hidden** in each linked view (per Notion performance best practices).
- [ ] **Filters use simple properties** (Select, Relation) not formula/rollup where possible.
- [ ] **Cursor rules or Notion docs** that define each avatar’s skills and how to use them.

---

## 7. Example avatar entries (for Avatars DB)

| Name          | Role   | Skills (multi-select)     | Description                    |
|---------------|--------|----------------------------|--------------------------------|
| Listing Agent | Agent  | Valuation, CRM, Docs       | Listings, seller leads, pricing |
| Buyer Lead    | Buyer  | Search, Alerts, CRM        | Buyer leads, search, tours     |
| Investor      | Investor | ROI, Reporting, CRM      | Deals, numbers, reporting      |
| Admin         | Admin  | Reporting, Docs, CRM      | Operations, reporting, docs    |

You can add more avatars and skills as needed; keep the same structure so every avatar has a clear dashboard and skill set.

---

*Ref: Notion best practices (Feb 2026), avatar-based workflow.*
