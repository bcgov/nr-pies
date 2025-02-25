---
id: process_tracking
title: Process Tracking 🚧
description: A conceptual hierarchy for tracking a common process.
tags:
  - business
  - developer
---

![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)

This page outlines the conceptual hierarchy and terminology embeddings which can describe the tracking of a process.

## Classifications

Refer to the [Process Tracking Terminology](/docs/intro/terminology#process-tracking) to understand the definitions
behind each classification level.

## Concept Map

```mermaid
---
title: Application Process Concept Hierarchy
---
flowchart LR
  AppType@{ shape: comment, label: "New
  Amendment
  Transfer
  Cancel" }

  Application --> Screening
  Application --> Submission
  Application --> Review
  Application --> Decision
  Application --> Effect
  Application --> AppType

  Submission --> Draft
  Submission --> Submitted
  Review --> Assessment
  Review --> OnHold
  Decision --> Approved
  Decision --> Declined
  Decision --> Cancelled
  Decision --> Abandoned
  Effect --> Withdrawn
  Effect --> Expired

  Assessment --> UnderReview
  Assessment --> InReferral
  Assessment --> WithClient
  OnHold --> Deferred
  OnHold --> Paused
  Approved --> Conditional
  Approved --> Offered
  Approved --> Issued

  subgraph Lifecycle
    Application
  end

  subgraph Type
    AppType
  end

  subgraph Phase
    Screening
    Submission
    Review
    Decision
    Effect
  end

  subgraph Stage
    Draft
    Submitted
    Assessment
    OnHold
    Approved
    Declined
    Cancelled
    Abandoned
    Withdrawn
    Expired
  end

  subgraph Status
    UnderReview
    InReferral
    WithClient
    Deferred
    Paused
    Conditional
    Offered
    Issued
  end
```

```mermaid
---
title: Authorization Process Concept Hierarchy
---
flowchart LR
  AuthType@{ shape: comment, label: "Permit
  License
  Right
  Grant"}

  Authorization --> Active
  Authorization --> Inactive
  Authorization --> Requested
  Authorization --> Suspended
  Authorization --> AuthType

  Phase --> Status

  subgraph Lifecycle
    Authorization
  end

  subgraph Type
    AuthType
  end

  subgraph Phase
    Active
    Inactive
    Requested
    Suspended
  end
```

## Code Sets

Each classification within the context of a specific kind of lifecycle will have a codified and enumerated concept. TBD.

## Type Descriptors

Each kind of lifecycle may be described by a type descriptor. For example, an application may be an amendment type, or
it may be a transfer type. TBD
