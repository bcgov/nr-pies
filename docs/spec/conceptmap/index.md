---
id: meta
title: Meta 🚧
description: PIES Concept Map
sidebar_position: 1
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

A Concept Map is a resource that defines relationships between concepts in different code systems or value sets. It
facilitates interoperability by mapping equivalent or related concepts across various terminologies, enabling systems to
understand and process each other's data accurately.

## Content

Mapping from [Source Code System](.) to [Target Code System](.).

### Mapping

Every Concept Map shall contain a table enumerating the complete set of all possible code words that are useable.

- Concept Map tables shall contain the following columns: `Source Code`, `Relationship` and `Target Code`.
- Mapping relationships shall always be described from `source` to `target`.
- Relationship column values should link to the
  [Concept Map Relationship](/docs/spec/codesystem/concept_map_relationship#concepts) concepts table.
- Code words should be formatted in `monospace` with backticks.

Example table mapping:

| Source Code | Relationship                                                              | Target Code |
| ----------- | ------------------------------------------------------------------------- | ----------- |
| `animal`    | [Equivalent](/docs/spec/codesystem/concept_map_relationship#concepts)     | `food`      |
| `fruit`     | [Narrower Than](/docs/spec/codesystem/concept_map_relationship#concepts)  | `food`      |
| `llama`     | [Narrower Than](/docs/spec/codesystem/concept_map_relationship#concepts)  | `animal`    |
| `math`      | [Not Related To](/docs/spec/codesystem/concept_map_relationship#concepts) | `animal`    |
| `peach`     | [Narrower Than](/docs/spec/codesystem/concept_map_relationship#concepts)  | `food`      |
| `pies`      | [Narrower Than](/docs/spec/codesystem/concept_map_relationship#concepts)  | `food`      |
| `object`    | [Equivalent](/docs/spec/codesystem/concept_map_relationship#concepts)     | `substance` |
| `peach`     | [Narrower Than](/docs/spec/codesystem/concept_map_relationship#concepts)  | `fruit`     |
| `substance` | [Broader Than](/docs/spec/codesystem/concept_map_relationship#concepts)   | `food`      |

## Errata

A Concept Map may include an errata section to provide further context or background information relevant to the domain.
Additional supplementary information and reference guides may also be cross referenced here.
