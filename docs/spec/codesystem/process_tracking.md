---
id: process_tracking
title: Process Tracking 🚧
description: A conceptual hierarchy for tracking a common process.
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

This page outlines the conceptual hierarchy and terminology embeddings which can describe the tracking of a process.

## Classifications

Refer to the [Process Tracking Terminology](/docs/intro/terminology#process-tracking) to understand the definitions
behind each classification level.

## Concept Map

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

## Code Sets

Each classification within the context of a specific kind of lifecycle will have a codified and enumerated concept. TBD.

### Code Formatting

All classification codes shall be encoded in UTF-8. However, only ASCII characters will be allowed. In a nutshell, the
following characters are allowed:

- **a-z** (lowercase only)
- **0-9** (digits - _Permitted, but discouraged for use in classification codes._)
- **\_** (underscore)

## Type Descriptors

Each kind of lifecycle may be described by a type descriptor. For example, an application may be an amendment type, or
it may be a transfer type. TBD
