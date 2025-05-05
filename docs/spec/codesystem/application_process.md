---
id: application_process
title: Application Process 🚧
description: A hierarchy for tracking an application process.
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/codesystem/application_process`

This Code System is used or referenced by:

- Code System: [Process Tracking](/docs/spec/codesystem/process_tracking)

## Definition

A type of [Process Tracking](/docs/spec/codesystem/process_tracking) scoped to Application Process Tracking.

## Content

### Ontology

```mermaid
---
title: Application Process Tracking Hierarchy
---

flowchart LR
  anytime@{ shape: comment, label: "rejected
  withdrawn" }

  application --> preapplication
  application --> initial_submission_review
  application --> technical_review_comment
  application --> decision
  application --> issuance

  initial_submission_review  --> submission_review

  technical_review_comment --> technical_review
  technical_review_comment --> referral
  technical_review_comment --> first_nations_consultation
  technical_review_comment --> tech_review_completed

  decision --> decision_review
  decision --> allowed
  decision --> disallowed

  issuance --> offered
  issuance --> issued
  issuance --> declined

  preapplication --> draft
  preapplication --> submitted

  subgraph phase
   application
  end

  subgraph stage
    preapplication
    initial_submission_review
    technical_review_comment
    decision
    issuance
  end

  subgraph state
    draft
    submitted
    submission_review
    technical_review
    referral
    first_nations_consultation
    tech_review_completed
    decision_review
    allowed
    disallowed
    offered
    issued
    declined
    anytime
  end
```

### Concepts

| Code          | Display     | Description                                                              |
| ------------- | ----------- | ------------------------------------------------------------------------ |
| `application` | Application | A submitted form(s) with the intent to obtain or amend an authorization. |

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
