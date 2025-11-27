---
id: state
title: State 📝
description: Stage process event tracking
tags:
  - business
  - executive
---

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/standard/element/process_tracking/state`

## Purpose

State is the lowest-level operational category of work captured on an authorization and is a subset of Stage.
Together the States describe the internal lifecycle of a Stage.

## Usage

Use State to record the specific activity or condition occurring within the current Stage.
States may be concurrent when parallel activities are valid.

## Guidance

- Multiple states can be active at any one time.

- Some states are unique to their respective stage, while others may appear in multiple stages, see definitions below.

- States do not carry timing; dates and durations come from Milestones.

- If On hold is used, capture a reason, see [On hold](/docs/standard/element/process_tracking/on-hold) for reasons.

## Properties

- **Data format**: string
- **Null**: Cannot be `null` – every authorization must have a stage.
- **Relationships:**
  - _Phase → Stage_: A Stage is a subset of a Phase (Phase → Stage is 1-to-many).
  - _Stage → State_: A State is a subset of a Stage (Stage → State is 1-to-many).
- **Milestones**: [Milestones](/docs/standard/element/process_tracking/milestone) record when a State starts/ends;
  States themselves carry no timestamps.
- **Change control:** An authorization may enter/exit States repeatedly within a Stage;
  concurrent States are permitted where business rules allow.

## Structure

- **state** (string): The current state of the authorization during the process and final decision.

### Application level

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

| Name                       | Context Label                            | Description                                                                                                                                                                         |
| -------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allowed                    | Allowed                                  | The application has met all requirements and the decision has been made to allow to move forward with the request.                                                                  |
| Decision review            | Decision review                          | The application has made it past the technical review and comment and slated for final decision.                                                                                    |
| Declined                   | Declined                                 | The applicant has declined the offer proposed by the issuing agency. Further changes to the offer may occur to be reviewed prior to finally being declined or issued.               |
| Disallowed                 | Disallowed                               | The application has not met all requirements, conflicts with other uses or is non-compliance with regulations. The applicant is notified of the decision not allow to move forward. |
| Draft                      | Draft                                    | The application is being prepared but has not yet been submitted. The applicant can make changes.                                                                                   |
| First Nations Consultation | First Nations Consultation               | The application has been sent off for consultation. This may occur at the same time as being reviewed by the deciding authority.                                                    |
| Issued                     | Issued                                   | The application process is fully completed and offer accepted (if required), and the necessary actions to issue the authorization.                                                  |
| Offered                    | Offered                                  | The application process is fully completed and offer sent out.                                                                                                                      |
| Referral                   | Referral                                 | The application is being referred to another relevant authorities for review. This may occur at the same time as technical by the deciding authority.                               |
| Accepted                   | Submission accepted                      | The application has been accepted by the initial reviewing authority.                                                                                                               |
| Submission review          | Submission review                        | The application is being evaluated by the relevant authority or team. This may involve assessment of documents and qualifications.                                                  |
| Submitted                  | Submitted                                | The application has been submitted for review.                                                                                                                                      |
| Technical review           | Technical review                         | The application is being reviewed by the deciding authority. This may occur at the same time as referrals or consultation.                                                          |
| Review completed           | Review completion and/or recommendations | The application has been reviewed/recommendation and comment. prepared.                                                                                                             |
| Rejected                   | Rejected                                 | The application has been rejected by deciding. authority                                                                                                                            |
| Withdrawn                  | Withdrawn                                | The application has been withdrawn by applicant. This may occur at any stage prior to a final decision or issuance.                                                                 |
| On hold                    | On hold ''with reason''                  | The application has been put on hold for a defined set of reasons. See [On hold](/docs/standard/element/process_tracking/on-hold) section.                                          |

## Post issuance level

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/standard#maturity)

## Specification

## References
