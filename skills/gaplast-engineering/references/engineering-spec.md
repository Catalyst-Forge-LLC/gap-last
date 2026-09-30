# Engineering application of Gap Last

This specification owns the engineering scope. The reconstruction
specification still owns incident reconstruction. This is a prospective
application of the reasoning discipline, not a claim that all design
questions are past-event causal chains.

## Evidence and intent

An observed problem needs an observation: a reproduction, an inconsistent
contract, a documented manual step, or other trace. Name its source and
revision where available. A declared goal is valid because the user wants
the outcome; the uncertain part is the intervention that will achieve it.
An exploratory idea needs a benefit test before it becomes a requirement.
Distinguish these starting points throughout the investigation.

Treat existing implementations and records as evidence, not infallible
references. Reproduce a handoff or inspect callers before assuming a
capability is absent. Differences in syntax and differences in meaning
are separate questions. Passing a schema check does not prove that two
tools mean the same thing by a field.

## Test the question

Choose the smallest check that distinguishes plausible responses. State
what competing results would mean before interpreting the result. Record
actual commands and observations when execution is available; otherwise
name the limit and propose the check without claiming it ran.

Use temporary fixtures when they answer the question without changing the
product. Reading or running an experiment does not silently authorize
publishing, live mutations, or implementation. Use existing authorization
and the host's permissions; a proposed check is not an approval request
when its resources and effects are already authorized.

## Choose an intervention

The options are not an escalation ladder. A recipe may be the complete
solution, and an existing feature may make new code unnecessary. Evaluate
compatibility, maintenance cost, standalone usefulness, local-first
behavior, inspectable artifacts, and the permissions the workflow needs.
Use declared constraints rather than imposing one architecture everywhere.

A recommendation identifies its job and evidence, alternatives considered,
acceptance criteria, dependencies, verification, and any uncertainty that
could change the choice. If the benefit is still hypothetical, recommend
a bounded experiment with a stopping condition. If nothing is justified,
say so. Avoid fabricated precision, savings, and new work for its own sake.

Before removing an inherited structure, name its responsibility and the
question it previously answered. Similar code does not establish shared
semantics. Consolidation needs evidence that constraints and evolution fit.

## Durable records and scope

Use the compact decision template when a record is useful; adapt it to the
task. For small questions, a short answer is enough. Do not force the nine
incident sections or causal-chain terminology onto prospective design.
Keep a proposed decision separate from implementation and verification.
Reference the project's authoritative records; do not introduce a second
application ledger or require other tools to adopt this method.

A reopening condition names evidence that would change the choice. New
evidence may retire the original question rather than answer it. Preserve
the short reason for that move so the next maintainer can understand it.
