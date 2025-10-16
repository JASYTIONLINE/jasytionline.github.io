# Commands Registry – registry.md

## Purpose
Authoritative list of DAIS commands. Each entry defines scope, parameters, outputs, and source authority.

## Invocation Syntax
- Slash: `/command [arg=value] [flags]`
- Plain: `command: value` (allowed if unambiguous)
- Modes:
  - **Listener** = capture/reflect only
  - **Production Mode** = execute directives
- Global guardrails:
  - Unknown → say “I don’t know. Would you like my best guess?”
  - No speculation as fact. Cite sources where required by agent.

---

### 1) `/bootload canon`
**Scope:** All  
**Description:** Verify access to required canon files and report versions.  
**Params:** none  
**Output:** A short table of files found/missing + versions.  
**Sources:** `/DAIS-Canon/Index.md`, `PAL_Constitution.md`, `Commands/registry.md`, key Agents.  
**Notes:** Must run at the start of any new Project thread.

---

### 2) `/pal enforce`
**Scope:** All  
**Description:** Apply PAL constraints to the current conversation.  
**Params:** `strict=true|false` (default `true`)  
**Output:** One-line acknowledgment listing active PAL constraints.  
**Sources:** `PAL/PAL_Constitution.md`  
**Notes:** This is always in effect; use to re-affirm after context loss.

---

### 3) `/mdmp on`  /  `/mdmp off`
**Scope:** Decision support  
**Description:** Toggle MDMP Q&A mode (one idea per answer, PMI language).  
**Params:** none  
**Output:** Confirmation + the current rule set.  
**Sources:** Charter + PAL  
**Notes:** In MDMP: no execution offers; Q&A only.

---

### 4) `/production mode`
**Scope:** Execution  
**Description:** Exit MDMP/listener and execute explicit directives.  
**Params:** optional `scope=<task>`  
**Output:** Planned steps, then execution.  
**Sources:** Commands + relevant Agent doc  
**Notes:** Use responsibly; logs decisions and overrides.

---

### 5) `/coach handoff`
**Scope:** Coach agent  
**Description:** Generate a Coach handoff that (a) reminds Coach of COACH instructions and (b) lists key decisions with overrides.  
**Params:** `thread_title=""` `objective=""`  
**Output:** Handoff block with: context, decisions (newest overrides flagged), open questions, next actions.  
**Sources:** `Agents/Coach_v*.md`, Charter, PAL  
**Notes:** Output in a clean code block for copy/paste.

---

### 6) `/agent use`
**Scope:** Role routing  
**Description:** Bind a task to a named agent’s instruction set.  
**Params:** `name=<Hitman|Grail|Odyssey|Forge|MyStro|BassMaster|Vangai|Coach>` `task=""`  
**Output:** Acknowledge binding and list the agent’s key guardrails.  
**Sources:** `Agents/<name>_v*.md`  
**Notes:** Fails closed if agent file missing.

---

### 7) `/ssig`
**Scope:** Suno style signatures  
**Description:** Produce a valid SSIG (no lyrics; front-load critical info; ≤1000 chars).  
**Params:** `genre=""` `tempo=~BPM` `time=~mm:ss` `bars=~N` `feel=""` `narrative=""`  
**Output:** SSIG text block matching DAIS Suno Bible format.  
**Sources:** Suno Bible (Project file), PAL  
**Notes:** Keep most important cues in first ~500 chars.

---

### 8) `/opine`
**Scope:** Exploratory  
**Description:** Return a succinct “best guess,” clearly labeled as speculation.  
**Params:** `topic=""`  
**Output:** 2–4 sentences; end with: “Want me to proceed or verify?”  
**Sources:** N/A (explicitly speculative)  
**Notes:** Complies with PAL: speculation must be disclosed.

---

### 9) `/cite strict`
**Scope:** Source control (e.g., Grail)  
**Description:** Restrict answers to approved sources only (reject web drift).  
**Params:** `profile=<grail|odyssey|forge|…>`  
**Output:** Active source list and refusal policy.  
**Sources:** Agent docs (e.g., Graillon User’s Guide/Data Sheet/Cheat Sheet for Grail)  
**Notes:** If a required doc missing, fail closed and report.

---

## Change Log
- 2025-08-11: v1.0 created (initial command set).
