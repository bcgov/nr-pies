---
id: stage
title: Stage 🔬
description: Stage process event tracking
tags:
  - business
  - executive
---

[![Maturity:Draft](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/standard/element/process_tracking/stage`

## Purpose

Stage is the highest-level **operational category of work** within a Phase.
It defines _what_ is currently being done on the authorization e.g., _Pre-application_, _Technical Review_, _Decision_,
_Issuance_, giving a clear reference point for progress tracking.

## Usage

Stage records the **current operational step** that an authorization is undergoing within its Phase.

## Guidance

- Exactly **one** Stage is active at any moment.
- Parallel or finer-grained work categories belong in **State**, not additional Stages.
- Stages are about what type of work is happening, not when it happens (see Milestone dates).

## Properties

- **Data format**: string
- **Null**: Cannot be `null` – every authorization must have a phase.
- **Relationships:**
  - _Phase → Stage_: A Stage is a subset of a Phase (Phase → Stage is 1-to-many).
  - _Stage → State_: A State is a subset of a Stage (Stage → State is 1-to-many).
- **Change control:** an authorization may progress through successive Stages and return to an earlier Stage any number
  of times.

## Allowed values (by Phase)

### Application Phase

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)

| Name                         | Description |
| ---------------------------- | ----------- |
| Pre-application              |             |
| Initial submission review    |             |
| Technical review and comment |             |
| Decision preparation         |             |
| Decision                     |             |

### Post issuance Phase

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/standard#maturity)

| Name | Description |
| ---- | ----------- |

## Specification

## References

- These terms are derived from previous permitting reform work defined as One Process
