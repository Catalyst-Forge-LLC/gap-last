# Tool A

`status: "complete"` means the analysis command finished, including when
it found blocking defects. It does not describe release readiness.

# Tool B

`status: "complete"` means a human approved the release and required
checks passed. It permits a later release job to proceed.

Both schemas accept the string `complete`. No release is authorized.
