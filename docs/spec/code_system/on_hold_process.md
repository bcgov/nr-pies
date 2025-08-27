---
id: on_hold_process
title: On Hold Process 🚧
description: Represents the reason a record is paused.
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/code_system/on_hold_process`

This Code System is used or referenced by:

- Value Set: [TBD](.)

## Definition

Represents the reason a [Record](/docs/spec/element/message/record) is paused, preventing it
from being actioned on. It is intended to be excluded from processing time.

## Content

### Ontology

Not Applicable

### Concepts

| Code                        | Display                   | Description                                                                                                      |
| --------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `CLIENT_REQUEST`            | Client Request            | The client requests the application be paused for a valid reason supported by staff.                             |
| `LEGAL_ACTION`              | Legal Action              | Legal proceedings or advice from legal counsel require the application to be paused.                             |
| `MISSING_INFORMATION`       | Missing Information       | Application requirements are not met during the review and additional information is required from the proponent |
| `PENDING_EXTERNAL_DECISION` | Pending External Decision | Awaiting input or decisions from other agencies or processes that affect the application.                        |

## Errata
