---
id: adr
title: Architecture Decision Records
description: PIES Architecture Decision Records (ADRs) are a lightweight, high-precision pattern designed to capture critical decisions.
sidebar_position: 1
tags:
  - business
  - developer
---

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/spec#maturity)

This article outlines PIES Architecture Decision Records (ADRs). Topics covered include the purpose, structure, and
content of ADRs, as well as how these decisions fit into the overall PIES specification.

## Template

```md
---
id: pies-xxx
title: pies-xxx: [Title]
description: A brief description of the decision and its context.
tags:
  - business
  - developer
---

## ADR-XXX: [Title]

**Status:** [Proposed | Accepted | Deprecated | Superseded]
**Date:** YYYY-MM
**Deciders:** [List of names]
**Category:** [Security | Networking | Ontology | Documentation | etc.]

### Context

State the driving problem, technical constraint, or business force in two to three sentences. Focus on current reality and hard requirements, not opinions.

### Decision

State the exact technical path chosen in one or two direct sentences. Use clear, active verbs.

### Rationale

State why this decision was made over alternatives.

#### Options Considered

- **[Option A - Chosen]:** Brief summary. Key reason it won.
- **[Option B]:** Brief summary. Primary reason for rejection.
- **[Option C]:** Brief summary. Primary reason for rejection.

### Consequences

#### Positive

- What becomes faster, safer, or cleaner.
- Concrete architectural benefit.

#### Negative

- Operational overhead or limitations accepted.
- Known technical debt introduced.

### References

- Links to relevant docs, diagrams, discussions.
```
