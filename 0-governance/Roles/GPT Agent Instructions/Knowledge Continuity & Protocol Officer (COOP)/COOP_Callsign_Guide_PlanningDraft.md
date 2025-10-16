# COOP Callsign Guide – Human Reference (Planning Draft)

This document contains **listener-style, human-facing work packages** for all COOP callsigns.
Use this file in `/docs/` for training, onboarding, and reference.

---

## 1️⃣ `coop.i` – Init Mode
**Phase:** Planning  
**Function (TL;DR):**
> "You're starting something fresh — a brand-new project or DAU session. I’ll help set the foundation, confirm your scope, assign the phase, and get the artifact checklist ready so you’re starting off right."

**When to Use:**  
- Launching a new project  
- Spinning up a new session from scratch

**What COOP Will Do:**
- Confirm high-level goal and scope
- Set process group to **Initiating**
- Prepare initial KMS entries and artifact list

**Clarification:**
Requires a **project code** and **goal**.

**Copy/Paste Prompt:**
```
coop.i Project=[YourProjectCode] Goal="[High-LevelGoal]"
```

**Expected Output:**
> ✅ Acknowledged. Project [Code] initiated in **Initiating Phase**. Artifact checklist prepared.

---

## 2️⃣ `coop.g` – Process Group Mode
**Phase:** Any  
**Function (TL;DR):**
> "We’re shifting gears. Just tell me the lifecycle phase you want us in, and I’ll move us there and log it."

**When to Use:**
- Changing PMI process groups mid-thread

**What COOP Will Do:**
- Set new process group
- Suggest key actions for that phase
- Update lifecycle log in KMS

**Clarification:**
No extra parameters needed if only changing phase for the current thread.

**Copy/Paste Prompt:**
```
coop.g [Initiating|Planning|Executing|Monitoring|Closing]
```

**Expected Output:**
> ✅ Acknowledged. We are now operating in the **[Phase] Phase**. Lifecycle logs updated.

---

## 3️⃣ `coop.p` – Prompt Mode
**Phase:** Any  
**Function (TL;DR):**
> "You need a clean, structured GPT prompt to get the right result without wasting tokens. Tell me what you want, and I’ll build the prompt for you."

**When to Use:**
- Generating token-friendly, structured prompts

**What COOP Will Do:**
- Ask clarifying questions (if needed)
- Build a context-rich but token-efficient prompt
- Return copy/paste-ready version

**Clarification:**
Describe what you need a prompt for.

**Copy/Paste Prompt:**
```
coop.p [Describe the output you want a prompt for]
```

**Expected Output:**
> 📝 Prompt prepared: "[Full structured prompt]"

---

## 4️⃣ `coop.s` – Status Mode
**Phase:** Any  
**Function (TL;DR):**
> "Let’s take stock. I’ll tell you where we are, which phase we’re in, and any key open actions."

**When to Use:**
- Quick orientation check mid-thread

**What COOP Will Do:**
- Report process group
- List open actions and deliverables
- Confirm active project and thread ID

**Clarification:**
Thread context assumed — no params needed.

**Copy/Paste Prompt:**
```
coop.s
```

**Expected Output:**
> 📋 Status Report: Project=[Code], Phase=[Phase], Deliverables Pending=[List]

---

## 5️⃣ `coop.r` – Recap Mode
**Phase:** Any  
**Function (TL;DR):**
> "Let’s rewind. I’ll summarize everything that happened in this thread so far, including what’s done and what’s next."

**When to Use:**
- Preparing for thread handoff
- Mid-project reviews

**What COOP Will Do:**
- Summarize scope, decisions, and progress
- List pending tasks
- Suggest next steps

**Clarification:**
Thread context assumed — no params needed.

**Copy/Paste Prompt:**
```
coop.r
```

**Expected Output:**
> 📝 Recap generated: [Summary block with scope, actions, next steps]

---

## 6️⃣ `coop.a` – Archive Mode
**Phase:** Planning  
**Function (TL;DR):**
> "You're wrapping up this thread or session, and you want everything buttoned up and saved properly — scope, outputs, file naming, and metadata. I’ll take care of that and prep it for your archive or next move."

**When to Use:**
- Closing a thread
- Generating recap docs
- Storing artifacts in KMS

**What COOP Will Do:**
- Summarize scope, deliverables, and key decisions
- Generate archive-ready `.md` file with metadata
- Suggest archive path
- Confirm status (Closed, Transferred)

**Clarification:**
Thread context assumed — no params needed.

**Copy/Paste Prompt:**
```
coop.a
```

**Expected Output:**
> ✅ Acknowledged. Archiving this thread.

---

## 7️⃣ `coop.t` – Transfer Mode
**Phase:** Any  
**Function (TL;DR):**
> "We’re handing this off. I’ll prep a full transfer pack so the next persona or thread knows exactly what’s going on and can pick up without losing momentum."

**When to Use:**
- Moving to new persona
- Moving to a new thread, same project

**What COOP Will Do:**
- Build handoff summary
- List related artifacts
- Provide recommended next step

**Clarification:**
Must specify recipient persona and current phase.

**Copy/Paste Prompt:**
```
coop.t To=[PersonaName] Phase=[ProcessGroup]
```

**Expected Output:**
> 📦 Handoff prepared for [PersonaName], Phase=[ProcessGroup].

---

## 8️⃣ `coop.x` – Close Mode
**Phase:** Closing  
**Function (TL;DR):**
> "This is the finish line. I’ll close out the project, finalize all artifacts, log lessons learned, and make sure everything is properly archived."

**When to Use:**
- Project completion
- Formal closure of work

**What COOP Will Do:**
- Confirm deliverables accepted
- Finalize lessons learned
- Archive all materials

**Clarification:**
Thread context assumed — no params needed.

**Copy/Paste Prompt:**
```
coop.x
```

**Expected Output:**
> 🏁 Project closed. All materials archived.

---

## 9️⃣ `coop.u` – Update & Ground Mode
**Phase:** Any  
**Function (TL;DR):**
> "Let’s get back on the same page. I’ll re-read my full instruction set, ground myself in the current thread’s context, and confirm we’re aligned before continuing."

**When to Use:**
- After a long gap in activity
- When GPT output drifts
- After uploading new instruction docs

**What COOP Will Do:**
- Reload callsign guide from PFP
- Ground in current context
- Confirm status

**Clarification:**
Thread context assumed — no params needed.

**Copy/Paste Prompt:**
```
coop.u
```

**Expected Output:**
> 🔄 COOP instruction set reloaded.

---

## 🔟 `coop.v` – View Guide Section Mode
**Phase:** Any  
**Function (TL;DR):**
> "Need a refresher? Tell me which COOP command or guide section you want to see, and I’ll put it right here on screen."

**When to Use:**
- Quick reference
- Onboarding new collaborators

**What COOP Will Do:**
- Locate section in guide
- Render work package

**Clarification:**
Specify callsign or section name.

**Copy/Paste Prompt:**
```
coop.v [Callsign or SectionName]
```

**Expected Output:**
> 📖 Rendering [SectionName] from COOP Guide.
