# DAIS Canon – Index.md

## Purpose
Single source of truth for DAIS rules, agents, and commands. Sets load order, precedence, and conflict-resolution for any chat that connects to `/DAIS-Canon/` via OneDrive.

## Canon Root
- **Repo root:** `/DAIS-Canon/`
- **Subfolders:**
  - `PAL/` – PAL_Constitution.md (locked)
  - `Charter/` – Charter.md
  - `Agents/` – one file per agent, **alias filenames preferred** (e.g., Coach.md) with archived versions (e.g., Coach_v2.2.md)
  - `Commands/` – registry.md (this is the canonical command list)
  - `Appendices/` – references, cheat-sheets (e.g., Project_Custom_Instructions.md)
  - `Archive/` – retired versions

## Load Order (highest priority first)
1. `PAL/PAL_Constitution.md` (governing constraints)
2. `Charter/Charter.md` (mission/scope)
3. `Commands/registry.md` (permitted verbs + formats)
4. `Agents/*.md` (role-specific protocols) – **alias filenames authoritative**
5. `Appendices/*` (supporting material only)

> If documents conflict: **PAL > Charter > Commands > Agents > Appendices**.  
> Within `Agents/`, prefer the **alias file** (e.g., `Coach.md`). If no alias exists, select the highest semantic version (e.g., `Coach_v2.2.md`).

## Active Aliases
The following filenames are permanent aliases to the current release. Older releases are stored in `/Archive`.

- **PAL** → `PAL/PAL_Constitution.md` (Version: see file header)
- **Charter** → `Charter/Charter.md`
- **Commands** → `Commands/registry.md`
- **Agents (aliases):**
  - Coach → `Agents/Coach.md`
  - Hitman → `Agents/Hitman.md`
  - Odyssey → `Agents/Odyssey.md`
  - Grail → `Agents/Grail.md`
  - Forge → `Agents/Forge.md`
  - MyStro → `Agents/MyStro.md`
  - BassMaster → `Agents/BassMaster.md`
  - Vangai → `Agents/Vangai.md`
- **Project Custom Instructions (master copy)** → `Appendices/Project_Custom_Instructions.md`

## Bootload Resolution
1. Attempt to load **alias files** listed above (authoritative if present).
2. If an alias is missing, list files in the relevant folder and select the **highest semantic version** matching the pattern (e.g., `Name_vX.Y.md|.docx`).  
3. Report which file was applied and its internal `Version:` header (if present).
4. Stop and report if neither alias nor fallback can be accessed; wait for user to fix permissions/paths.

## Versioning Rules
- File names for archived versions MUST include a version tag: `_vMAJOR.MINOR` (e.g., `Hitman_v2.2.md`).
- Each file begins with:
  ```
  Title: <Document Title>
  Version: X.Y
  Last-Updated: YYYY-MM-DD
  Changelog: …
  ```
- No unauthorized edits—open a new version file in `/Archive` if changes are approved and update the **alias** to the new content.

## Required Files Checklist (Boot)
- [ ] `PAL/PAL_Constitution.md` (present)
- [ ] `Charter/Charter.md` (present)
- [ ] `Commands/registry.md` (present)
- [ ] At least one agent alias in `Agents/` (e.g., `Coach.md`, `Hitman.md`, `Grail.md`)
- [ ] `Index.md` (this file)

## Canonical Boot Prompt (paste this in new Project chats)
> **Bootload DAIS Canon.** Confirm access to:
> - `/DAIS-Canon/Index.md`
> - `/DAIS-Canon/PAL/PAL_Constitution.md`
> - `/DAIS-Canon/Commands/registry.md`
> - `/DAIS-Canon/Agents/Coach.md` and `/DAIS-Canon/Agents/Hitman.md` (if present)
> Report detected versions and any missing files. Then wait.

## Compliance Guardrails (must enforce)
- Never present speculation as fact. If unknown: **“I don’t know. Would you like my best guess?”**
- If memory/data unavailable: disclose the gap; do not fabricate.
- MDMP Q&A mode returns **one** idea at a time. Production Mode executes directives.
- When citing, prefer official docs designated in agent files (e.g., Project Graillon sources for Grail).

## Change Log (Index.md)
- 2025-08-11: v1.1 added **Active Aliases** and **Bootload Resolution** sections; clarified alias authority and archive use.
- 2025-08-11: v1.0 created (manifest, load order, boot prompt).
