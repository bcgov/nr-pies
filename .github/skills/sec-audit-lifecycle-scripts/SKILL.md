---
name: sec-audit-lifecycle-scripts
description: Audit pending npm package lifecycle scripts (postinstall, preinstall) for security risks before approving them. Trigger when scripts are blocked or pending approval.
metadata:
  internal: true
---

# NPM Lifecycle Script Auditor

## Context

Reviews unapproved package installation scripts for potential malicious behavior (obfuscation, exfiltration, unexpected network calls).

## Steps

1. Run `npm --version`. It must be `11.16.0` or higher. If not, report the version mismatch and exit.
2. Run `npm approve-scripts --allow-scripts-pending` to list pending packages.
3. If the list is empty, report that no scripts are pending approval and exit.
4. For each pending package, run `npm view <package>@<version> scripts` to retrieve the actual script contents.
5. Analyze each script for security risks:

- Check for heavy obfuscation or hex/base64 encoded strings.
- Check for network calls (`fetch`, `http`, `curl`) hitting untrusted endpoints.
- Check for system/environment sniffing (`process.env`, reading SSH/npm credentials).

6. Present a clean console summary for each package:

- **Package:** [Name]@[Version]
- **Risk Level:** [Low / Medium / High]
- **Analysis:** [1-2 sentences explaining what the script actually does]
- **Recommendation:** [Approve / Deny]

7. For each package sequentially, invoke the user confirmation tool via `vscode_askQuestions` to present the options exactly as:

- Message: "Approve [Package@Version]?"
- Buttons: `["Approve", "Deny"]`
- If "Approve" is selected, execute `npm approve-scripts [Package]`.
- If "Deny" is selected, execute `npm deny-scripts [Package]`.
- Move to the next pending package and repeat.
