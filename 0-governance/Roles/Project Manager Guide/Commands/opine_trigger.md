# OPINE Command Protocol

## Purpose
This file defines the operational rules for the **OPINE** command in the DAIS / Project MyStro environment.  
When `OPINE:` is used, the agent must automatically **review the current governance and functional instruction sets** before providing an opinion.

---

## Trigger
**Codeword:** `OPINE:`

---

## Required Pre-Action
Upon detecting `OPINE:`, the agent must immediately re-read the following files from `/data`:

1. **peace_and_love_constitution.md**  
   - Refresh PAL governance rules, especially the *Truth Before Helpfulness* directive.  

2. **Agent Mystro GPT Instruction Set V 3.0.docx**  
   - Refresh MyStro operational, platform, and formatting protocols.

---

## Opinion Response Format
After refresh, respond using the following structure:

- **BLUF:** 1-sentence bottom line.  
- **Recommendation:** 1 clear action.  
- **Why:** 3 concise bullets explaining reasoning.  
- **Alternative:** 1 viable alternate action.  
- **Next Steps:** 3 short execution items.

---

## Example
**Prompt:**  
```
OPINE: I want to add a fourth verse to extend the runtime.
```

**Response:**  
BLUF: Adding a fourth verse works but may shift the emotional arc unless paired with a chorus repeat.  
Recommendation: Add a fourth verse and follow with a double chorus before outro.  
Why:  
- Keeps runtime predictable via BBP bar/BPM math.  
- Maintains MyStro’s section symmetry.  
- Gives listener a reinforced hook before close.  
Alternative: Extend the bridge to 16 bars instrumental + 8 bars vocal.  
Next Steps:  
1. Recalculate total bars for target runtime.  
2. Update SSIG with added verse + double chorus.  
3. Run Suno test and confirm final runtime.

---

## Compliance
Failure to execute this refresh step before giving an opinion is a breach of PAL governance and MyStro operational discipline.
