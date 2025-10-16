# 🧠 DAU Terminology and Naming Standards v1.0

**Version:** 1.0  
**Last Updated:** 2025-08-15  
**Category:** /DAIS-Canon/Appendices/  
**Applies to:** All DAIS agents, threads, projects, and artifact naming systems  
**Status:** Canonical (Approved)

---

## 🎯 Purpose & Scope

This document establishes the standardized **terms**, **naming conventions**, **versioning policies**, and **folder structures** for all entities operating within the Dragon AI Universe (DAU). It supports continuity, governance, and interoperability across GPT sessions, personas, and projects.

---

## 📚 Standard Terminology Glossary

| **Term** | **Definition** | **DAU Context** |
|----------|----------------|-----------------|
| `Session` | A full PMI-aligned project lifecycle | From Charter → Planning → Execution → Close |
| `Thread` | A single GPT interaction within a Session | Contains one or more prompts/tasks |
| `Persona` | An AI agent with a specific mission and role | e.g., Coach, Hitman, Forge |
| `Artifact` | Any file, prompt, output, or deliverable | Stored in KMS under correct folder/version |
| `Prompt` | A structured input request to a GPT agent | Includes context, problem, and directive |
| `COACH` | The handoff protocol for passing threads | Ensures continuity between agents or sessions |
| `KMS` | Knowledge Management System | Where all artifacts are versioned and organized |

---

## 🏷️ Naming Convention Standard

### 🔹 Canonical Format

```
[ProjectCode]_[Agent]_[Type]_[BriefDescription]_[YYYYMMDD][_vX.Y]
```

### 🔹 Components

| Element | Description | Example |
|---------|-------------|---------|
| `ProjectCode` | Short project label | `330X`, `TTU`, `DRG` |
| `Agent` | Persona or team responsible | `Coach`, `Forge`, `Hitman` |
| `Type` | Artifact type | `Prompt`, `Plan`, `Scope`, `Summary` |
| `BriefDescription` | Short summary | `DailyLog`, `ScopeDraft` |
| `YYYYMMDD` | Date stamp | `20250815` |
| `_vX.Y` | Optional version | `_v1.0`, `_v2.3` |

### 🔹 Examples

- `330X_Coach_Prompt_ScopeKickoff_20250815_v1.0.md`
- `TTU_Forge_Artifact_RiskMatrix_20250709_v1.2.xlsx`

---

## 🗂️ Canonical Folder Structure

```
/DAU/
├── index.md
├── peace_and_love_constitution.md
├── registry.md
│
├── /Projects/
│   └── /330X/
│       ├── /0000_Charter/
│       ├── /1000_Planning/
│       ├── /3000_Threads/
│       ├── /9999_Archive/
│       └── ...
│
├── /DAIS-Canon/
│   ├── /Appendices/
│   └── /PromptTemplates/
│
├── /Agents/
│   ├── Coach.md
│   ├── Forge.md
│   └── Hitman.md
│
└── /Tools/
```

---

## 🔁 Versioning & Archival Policy

| Rule | Policy |
|------|--------|
| Version Updates | Update version number when document is revised |
| Archive Rule | Move outdated files to `/9999_Archive/` |
| _FINAL vs _DRAFT | Optional tag use is allowed, but versions are preferred |
| Canon Docs | Always include version + approval status |

---

## 📌 Agent Enforcement

- All DAIS agents must use this standard when:
  - Naming outputs
  - Referring to documents
  - Organizing threads
- GPT sessions must reject ambiguous or non-compliant names
- Deviations must be logged and corrected via `/9000_Errata/`

---

## ✅ Compliance Note

This document is required reading for:
- All DAU agents and authors
- Any system generating or consuming DAU artifacts
- Prompt engineers building persona-based tooling

