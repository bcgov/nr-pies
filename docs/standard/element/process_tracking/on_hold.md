---
id: on_hold
title: On hold 📝
description: On hold process event tracking
tags:
  - business
  - executive
---

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/standard/element/process_tracking/on_hold`

## Purpose

The purpose of the On Hold data element is to track periods during which an application is paused due to circumstances
that prevent it from being actioned. This ensures that turnaround time metrics reflect only the time when the application
is actively being processed. Accurate tracking of On Hold periods supports transparency, performance measurement, and
process improvement across permitting systems.

## Usage

This element is used to:

- Exclude time spent on hold from official processing time calculations.
- Identify systemic delays and opportunities for process improvement.
- Support consistent reporting across business areas and systems.
- Provide context for analysis and metrics.

The On Hold element can apply to both application and post-issuance phases of an authorization and may be used multiple
times throughout the lifecycle of an authorization. Each On Hold record must include a start date and end date when no
longer on hold, a reason, and the user who initiated the hold.

## Guidance

- On Hold periods must be time-stamped
- Only one active On Hold record may exist at a time.
- On Hold applications must be manually taken Off Hold by setting and end date to resume processing.
- On Hold may be referred to as “Parked” in some systems; the effect is the same

## Properties

| Property       | Definition                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------ |
| Type           | `string`                                                                                   |
| Mandatory      | Yes                                                                                        |
| Relationships  | [Milestone](/docs/standard/element/process_tracking/milestone) On hold start and end dates |
| Change Control | May be put on hold multiple times                                                          |

## Application level

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

| Display                   | Description                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| Applicant Request         | The application is paused as requested by applicant and supported by staff.                              |
| Legal Action              | The application is subject to legal proceedings, or legal counsel has advised that processing be paused. |
| Missing Information       | More information is required from the applicant to proceed with the review.                              |
| Pending External Decision | The application requires decision, approval, or input from another agency or an external process.        |

## Post issuance level

## Relationship to Specification

This element is utilized in the technical implementation:

- See: [On Hold Process](/docs/spec/code_system/on_hold_process) Specification

## References
