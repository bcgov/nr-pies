---
id: application_process
title: Application Process 🚧
description: A hierarchy for tracking an application process.
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/code_system/application_process`

This Code System is used or referenced by:

- Code System: [Process Tracking](/docs/spec/code_system/process_tracking)

## Definition

A type of [Process Tracking](/docs/spec/code_system/process_tracking) scoped to Application Process Tracking.

## Content

### Ontology

```mermaid
---
title: Application Process Tracking Hierarchy
---

flowchart LR
  PRE_APPLICATION --> DRAFT
  PRE_APPLICATION --> SUBMITTED

  APPLICATION --> PRE_APPLICATION
  APPLICATION --> INITIAL_SUBMISSION_REVIEW
  APPLICATION --> TECH_REVIEW_COMMENT
  APPLICATION --> DECISION
  APPLICATION --> ISSUANCE
  APPLICATION --> REJECTED
  APPLICATION --> WITHDRAWN

  INITIAL_SUBMISSION_REVIEW  --> SUBMISSION_REVIEW

  TECH_REVIEW_COMMENT --> TECHNICAL_REVIEW
  TECH_REVIEW_COMMENT --> REFERRAL
  TECH_REVIEW_COMMENT --> FIRST_NATIONS_CONSULTATION
  TECH_REVIEW_COMMENT --> TECH_REVIEW_COMPLETED

  DECISION --> DECISION_REVIEW
  DECISION --> ALLOWED
  DECISION --> DISALLOWED

  ISSUANCE --> OFFERED
  ISSUANCE --> ISSUED
  ISSUANCE --> DECLINED

  subgraph PHASE
   APPLICATION
  end

  subgraph STAGE
    PRE_APPLICATION
    INITIAL_SUBMISSION_REVIEW
    TECH_REVIEW_COMMENT
    DECISION
    ISSUANCE
    REJECTED
    WITHDRAWN
  end

  subgraph STATE
    DRAFT
    SUBMITTED
    SUBMISSION_REVIEW
    TECHNICAL_REVIEW
    REFERRAL
    FIRST_NATIONS_CONSULTATION
    TECH_REVIEW_COMPLETED
    DECISION_REVIEW
    ALLOWED
    DISALLOWED
    OFFERED
    ISSUED
    DECLINED
  end
```

### Concepts

| Level | Code                         | Display                      | Description |
| ----- | ---------------------------- | ---------------------------- | ----------- |
| 1     | `APPLICATION`                | Application                  |             |
| 3     | `ALLOWED`                    | Allowed                      |             |
| 3     | `DECISION_REVIEW`            | Decision Review              |             |
| 2     | `DECISION`                   | Decision                     |             |
| 3     | `DECLINED`                   | Declined                     |             |
| 3     | `DISALLOWED`                 | Disallowed                   |             |
| 3     | `DRAFT`                      | Draft                        |             |
| 3     | `FIRST_NATIONS_CONSULTATION` | First Nations Consultation   |             |
| 2     | `INITIAL_SUBMISSION_REVIEW`  | Initial Submission Review    |             |
| 2     | `ISSUANCE`                   | Issuance                     |             |
| 3     | `ISSUED`                     | Issued                       |             |
| 3     | `OFFERED`                    | Offered                      |             |
| 2     | `PRE_APPLICATION`            | Pre-Application              |             |
| 3     | `REFERRAL`                   | Referral                     |             |
| 2     | `REJECTED`                   | Rejected                     |             |
| 3     | `SUBMISSION_REVIEW`          | Submission Review            |             |
| 3     | `SUBMITTED`                  | Submitted                    |             |
| 2     | `TECH_REVIEW_COMMENT`        | Technical Review and Comment |             |
| 3     | `TECH_REVIEW_COMPLETED`      | Technical Review Completed   |             |
| 3     | `TECHNICAL_REVIEW`           | Technical Review             |             |
| 2     | `WITHDRAWN`                  | Withdrawn                    |             |

## Errata

<details>
<summary>Old Process Tracking Examples</summary>

These are old Process Tracking hierarchy concepts. While useful as an orientation guide, they no longer reflect the
latest code words that are used in the specification.

```mermaid
---
title: Process Tracking
---
flowchart LR
  app_type@{ shape: comment, label: "new
  amendment
  transfer
  cancel" }

  application --> screening
  application --> submission
  application --> review
  application --> decision
  application --> effect
  application --> app_type

  submission --> draft
  submission --> submitted
  review --> assessment
  review --> on_hold
  decision --> approved
  decision --> declined
  decision --> cancelled
  decision --> abandoned
  effect --> withdrawn
  effect --> expired

  assessment --> under_review
  assessment --> in_referral
  assessment --> with_client
  on_hold --> deferred
  on_hold --> paused
  approved --> conditional
  approved --> offered
  approved --> issued

  state --> status

  subgraph lifecycle
    application
  end

  subgraph type
    app_type
  end

  subgraph phase
    screening
    submission
    review
    decision
    effect
  end

  subgraph stage
    draft
    submitted
    assessment
    on_hold
    approved
    declined
    cancelled
    abandoned
    withdrawn
    expired
  end

  subgraph state
    under_review
    in_referral
    with_client
    deferred
    paused
    conditional
    offered
    issued
  end
```

```mermaid
---
title: Authorization Process Concept Hierarchy
---
flowchart LR
  auth_type@{ shape: comment, label: "permit
  license
  right
  grant"}

  authorization --> active
  authorization --> inactive
  authorization --> requested
  authorization --> suspended
  authorization --> auth_type

  phase --> status

  subgraph lifecycle
    authorization
  end

  subgraph type
    auth_type
  end

  subgraph phase
    active
    inactive
    requested
    suspended
  end
```

</details>
