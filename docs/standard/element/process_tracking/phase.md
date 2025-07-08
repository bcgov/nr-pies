---
id: phase
title: Phase 🔬
description: Phase process event tracking
tags:
  - business
  - executive
---

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/standard/element/process_tracking/phase`

## Purpose

Phase is a business-level category of engagement with an authorization.
It distinguishes whether the record is still being created and assessed e.g., **Application** or is already in effect
and being managed e.g., **Post-issuance**.
It defines the **why** part of work on the authorization, not process categories of work, see Stages below.

## Usage

Phase is set to **Application** when an authorization record is created and is updated to **Post-issuance** once the
permit is formally issued. Consuming systems rely on this value to invoke the appropriate workflows, controls, and
reporting logic, signalling whether the authorization remains in development or is an active instrument.

## Guidance

- Exactly **one** Phase is active at any time.
- Phase does not define the specific operational categories of work, these are defined at the Stage level.
- Phases are about what type of work is happening, not when it happens (see Milestone dates).

<!-- ## Structure -->

## Properties

<!-- **phase** (string): -->

- **Data format**: string
- **Null**: Cannot be `null` – every authorization must have a phase.
- **Relationships**:
  - _Lifecycle → Phase_: A phase is a subset of a lifecycle (Lifecycle → Phase is 1-to-many).
  - _Phase → Stage_: A stage is a subset of a phase (Phase → Stage is 1-to-many).
- **Change control**: A phase should change **at most once** per authorization.
  <!-- Describes the distinct period or subdivision within a lifecycle. A subdivision of the lifecycle of an
  authorization that indicates whether it is in the Application (pre issuance) phase or in the Post-Issuance phase
  (after issuance). -->

## Allowed values (by Lifecycle)

### Permitting Lifecycle

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

| Name          | Description                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application   | Indicates that the authorization is currently undergoing the application process e.g. creating, vetting, evaluating... and has not yet been issued. |
| Post issuance | Indicates that the authorization has been issued and is now active or being managed e.g., through amendments, renewals, or maintenance activities.  |

## Specification

## References
