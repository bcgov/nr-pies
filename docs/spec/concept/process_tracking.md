---
id: process_tracking
title: Process Tracking 🚧
description: A conceptual hierarchy for tracking a common process.
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](../overview#maturity)

This page outlines the conceptual hierarchy and terminology embeddings which can describe the tracking of a process.

## Classifications

Refer to the [Process Tracking Terminology](/docs/intro/terminology#process-tracking) to understand the definitions behind each level.

## Concept Map

```mermaid
---
title: Application Process Concept Hierarchy
---
  application --> preapplication
  application --> initial_submission_review
  application --> technical_review_comment
  application --> decision
  application --> issuance

  preapplication --> draft
  preapplication --> submitted

  initial_submission_review --> submission_review

  technical_review_comment --> technical_review
  technical_review_comment --> referral
  technical_review_comment --> first_nations_consultation
  technical_review_comment --> tech_review_withdrawn
  technical_review_comment --> tech_review_rejected
  technical_review_comment --> tech_review_completed

  decision --> decision_review
  decision --> allowed
  decision --> disallowed
  decision --> decision_withdrawn

  issuance --> offered
  issuance --> issued
  issuance --> declined

  state <-- status

  subgraph lifecycle
    application
  end

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
    tech_review_withdrawn
    tech_review_rejected
    tech_review_completed
    decision_review
    allowed
    disallowed
    decision_withdrawn
    offered
    issued
    declined
  end
```

## Code Sets

Each classification within the context of a specific level will have a codified and enumerated concept. TBD.

### Code Formatting

All classification codes shall be encoded in UTF-8. However, only ASCII characters will be allowed. The following characters are accepted:

- **a-z** (lowercase only)
- **0-9** (digits)
- **\_** (underscore)

## Type Descriptors

Each kind of phase level may be described by a type descriptor. For example, to descibe past the application phase when it has been inssued or after when it needs to be renewed. This is still being reviewed for implimentation and identification of the different phases.
