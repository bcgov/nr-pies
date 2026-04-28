---
id: on_hold_process
title: On Hold Process 📝
description: Represents the reason a record is paused.
tags:
  - business
  - developer
---

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/code_system/on_hold_process`

This Code System is used or referenced by:

- Value Set: [TBD](.)

## Definition

The purpose of the On Hold data element is to track periods during which an application is paused due to circumstances
that prevent a [Record](/docs/spec/element/message/record) from being actioned.

## Standard Reference

This specification implements the following:

- [`<On Hold>` Standard](/docs/standard/element/process_tracking/on-hold)

In the event of conflict, the Standard definition is authoritative.

## Content

### Ontology

Not Applicable

### Concepts

| Code                        | Display                   | Description                                                                                              |
| --------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `APPLICANT_REQUEST`         | Applicant Request         | The application is paused as requested by applicant and supported by staff.                              |
| `LEGAL_ACTION`              | Legal Action              | The application is subject to legal proceedings, or legal counsel has advised that processing be paused. |
| `MISSING_INFORMATION`       | Missing Information       | More information is required from the applicant to proceed with the review.                              |
| `PENDING_EXTERNAL_DECISION` | Pending External Decision | The application requires decision, approval, or input from another agency or an external process.        |

## Errata
