---
id: objective
title: Objective 🔬
description: Process tracking elements
sidebar_position: 1
tags:
  - business
  - executive
---

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

## Objective

Define **one province-wide framework** for standardizing where every authorization is at from initial application to
final closure, by mapping each record to a four-level hierarchy (Lifecycle → Phase → Stage → State) and capturing the
mandatory date/timestamps that mark transitions between each.

**This data element**:

- **Enables standardized process tracking** – the authorization data is stored in a format to allow for the tracking of
  an application through as it progresses until a final decision and then into maintenance of the issued authorization.
- **Ensures a common vocabulary** – the authorization data uses the same controlled lists for Lifecycle, Phase, Stage,
  States for the purposes of process tracking.
- **Ensures mandatory timestamps** – Start/end time-stamps are recorded as the authorization is progressing along its
  lifecycle.
- **Ensures system interoperability** –

**This data element does not**:

- **Track Compliance and Enforcement processes** - out of scope for this standard.

```mermaid
---
title: Process Tracking Hierarchy Standard
---

flowchart TD
  Onhold --> Reason1
  Onhold --> Reason2
  Onhold --> Reason3
  Onhold --> Reason4

  Phase1 --> Stage1
  Phase1 --> Stage2
  Phase1 --> Stage3
  Phase1 --> Stage4

  Stage1 --> State1
  Stage1 --> State2
  Stage2 --> State3
  Stage2 --> State4
  Stage3 --> State5
  Stage3 --> State6
  Stage4 --> State7
  Stage4 --> State8

  subgraph Phase
  Phase1
  end

  subgraph Stage
  Stage1
  Stage2
  Stage3
  Stage4
  end

  subgraph State
  State1
  State2
  State3
  State4
  State5
  State6
  State7
  State8
  end
```

```mermaid
---
title: Process Tracking Hierarchy Status
---

flowchart TD
  subgraph Status [" "]
    Status1
    Status2
    Status3
    Status4
    Status5
    Status6
    Status7
    Status8
    Status9
    Status10
    Status11
    Status12
  end
```

```mermaid
---
title: Process Tracking Hierarchy Milestone Standard
---

flowchart TD
  subgraph Milestone  [" "]
  Milestone1
  Milestone2
  Milestone3
  Milestone4
  Milestone5
  Milestone6
  Milestone7
  Milestone8
  end
```
