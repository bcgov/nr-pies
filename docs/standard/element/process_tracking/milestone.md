---
id: milestone
title: Milestone dates 📝
description: Milestone process event tracking
tags:
  - business
  - executive
---

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/standard/element/process_tracking/milestone`

## Purpose

This data grouping is designed to track and capture key dates throughout the authorization application process,
enabling interested parties to monitor the progress of applications, ensure compliance with timelines, and support
reporting and auditing.

## Usage

The fields provide transparency and accountability, particularly in relation to decision points and start and end
processes during the identified tracking process hierarchy.

## Guidance

**Milestone** dates: Ensure key dates are captured, including those that occur after adjudication.
**Timestamps**: Be aware of the different ways timestamps may be captured across systems (local time, time zones, UTC, etc.).
System integration: Integrating data from multiple systems may involve challenges, including varying time formats (UTC,
local time, daylight savings). All date and time data shall be stored as **Coordinated Universal Time (UTC).**

## Structure

### Application level

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

| Name                                  | Description                                                                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Submitted date                        | The date and time when the application was formally submitted for review. This represents the start of the application process.                                 |
| Accepted date                         | The date and time when the review of the application's completeness concludes. This marks when the application is deemed complete and ready for further review. |
| Rejected date                         | The date and time when the application is officially rejected. This indicates that the application was deemed unfit for further processing.                     |
| Technical review start date           | The date and time when the technical team starts their review of the application. This marks the beginning of the technical assessment phase.                   |
| Technical review end date             | The date and time when the technical team finishes their review of the application. This marks the conclusion of the technical assessment phase.                |
| First Nations Consultation start date | The date and time when consultation with First Nations communities begins as part of the application process.                                                   |
| First Nations Consultation end date   | The date and time when consultation with First Nations communities ends.                                                                                        |
| Referral start date                   | The date and time when the submission is in referral with another entity has started.                                                                           |
| Referral end date                     | The date and time when the submission is in referral with another entity has been completed.                                                                    |
| Decision review start date            | The date and time when the reviews, referrals and consultation has started.                                                                                     |
| Decision review end date              | The date and time when the reviews, referrals and consultation has been completed and the reviewing authority starts their final decision.                      |
| Adjudication date                     | The date and time when the application is adjudicated, and a final decision is made. This date may also be the same day it was issued.                          |
| Issued date                           | The date and time when the permit is issued.                                                                                                                    |
| On hold start date                    | The date and time that an application or authorization has been put on hold. See On hold section.                                                               |
| On hold end date                      | The date and time that an application or authorization is no longer on hold. See On hold section.                                                               |

## Post issuance level

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/standard#maturity)

This section has not been flushed out.

| Name                 | Presentation    | Description                                                                                                        |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| Effective start date | Allowed         | The application has met all requirements and the decision has been made to allow to move forward with the request. |
| Effective end date   | Decision review | The application has made it past the technical review and comment and slated for final decision.                   |

## Specification

## References
