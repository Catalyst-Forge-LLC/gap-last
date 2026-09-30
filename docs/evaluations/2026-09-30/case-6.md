# Slow report assessment

The reported problem is slow rendering; parsing-cache benefit is a hypothesis. The unanswered question was whether eliminating repeated parsing would materially address the delay. The available diagnostic can distinguish stage contributions in its fictional accounting, but cannot establish production performance.

After inspecting `diagnostic.mjs`, I ran:

```text
node .\diagnostic.mjs --fresh
node .\diagnostic.mjs --cached
```

Both exited 0. Actual output:

```json
{"kind":"fixture","cached":false,"parseMs":5,"renderMs":400,"totalMs":405}
{"kind":"fixture","cached":true,"parseMs":0,"renderMs":400,"totalMs":400}
```

The script emits fixed stage accounting, not measured wall-clock timings. In this accounting, caching removes 5 units of parsing time while rendering remains 400; it does not remove the dominant contribution. This evidence changes the next question from how to cache parsing to what accounts for rendering cost and whether the same pattern exists in production.

Recommend no parsing-cache product change on this evidence. The smallest useful next step is a bounded, representative stage trace from the actual report workflow, with a stated performance target and repeated conditions. If rendering dominates there too, investigate that stage before proposing an intervention. If parsing instead proves material, reopen the cache proposal and test both performance and output correctness against the target. Stop expanding the investigation once a reproducible stage contribution and a sufficient response are demonstrated.

No production trace, target, live service, or rendering implementation was available or tested. No production-speedup claim is established, and no product changes were applied.
