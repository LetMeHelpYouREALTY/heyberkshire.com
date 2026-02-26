# MCP setup for this project

## Notion MCP (configured in `.cursor/mcp.json`)

The **Notion MCP server** is installed via `mcp.json`. To finish setup:

### 0. Create your local config (if needed)

- If **`.cursor/mcp.json`** is missing, copy from the template:
  - **Windows:** `copy .cursor\mcp.json.example .cursor\mcp.json`
  - **macOS/Linux:** `cp .cursor/mcp.json.example .cursor/mcp.json`
- Your real `mcp.json` is in `.gitignore` so the token is never committed.

### 1. Create a Notion integration

1. Go to [Notion → Integrations](https://www.notion.so/profile/integrations).
2. Click **New integration**.
3. Name it (e.g. "Cursor MCP"), pick a workspace, and set capabilities (e.g. "Read content", "Update content", "Insert content" as needed).
4. Copy the **Internal Integration Secret** (starts with `ntn_` or `secret_`).

### 2. Connect pages/databases to the integration

- Open each Notion page or database you want Cursor to use.
- Click **⋯** (top right) → **Connections** → **Connect to** → choose your integration.
- Without this step, the MCP will not see those pages or databases.

### 3. Add your token to MCP config

- Open **`.cursor/mcp.json`** (create from `mcp.json.example` if needed).
- Replace `YOUR_NOTION_INTEGRATION_TOKEN` with your integration secret. Keep the surrounding quotes, e.g. `"Bearer secret_xxxx..."`.

### 4. Restart Cursor

- Quit Cursor completely and reopen the project so the MCP server loads.

### 5. Verify

- In chat, try: **Search my Notion for [a page name]** or **Find my tasks database**.
- If the Notion plugin tools appear and return results, the integration is working.

**Security:** `.cursor/mcp.json` is in `.gitignore` so your token is never committed. The repo only has `.cursor/mcp.json.example` as a template.

---

## Adding more MCP servers

Edit **`.cursor/mcp.json`** and add entries under `mcpServers`. Examples:

- **GitHub:** `"github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx" } }`
- **Filesystem:** `"filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/path/to/allowed/folder"] }`

Then restart Cursor.

---

## Notion plugin vs Notion MCP

- **Cursor Notion plugin** (Settings → Extensions): Uses Cursor’s own Notion connection; you sign in with your Notion account.
- **Notion MCP** (`mcp.json`): Uses a Notion **integration** and token; you control which pages/databases are shared via “Connect to integration.”

You can use one or both. The MCP gives the AI direct API-style access to the pages/databases you connect to the integration.
