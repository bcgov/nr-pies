---
id: meta
title: Meta 🚧
description: PIES Code Systems
sidebar_position: 1
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/codesystem`

This Code System is used or referenced by:

- Value Set: [TBD](.)

## Definition

A Code System defines a set of codes and their meanings. It serves as the authoritative source for a particular set of
concepts.

## Content

The main content describing the Code System should be described here. Content may include an ontology, and should
include a concept code table.

### Ontology

Every Code System may include a visual Mermaid diagram to convey the ontology of code words and their relationships with
each other.

### Concepts

Every Code System shall contain a table enumerating the complete set of all possible code words that are useable.

- Code System tables shall contain the following columns: `Code`, `Display` and `Definition`.
- Code System tables may contain the following columns when necessary: `Level`, `Source` and `Comments`.

| Column     | Purpose                                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Level      | A few code lists that PIES defines are hierarchical - each code is assigned a level. See [Code System](.) for further information.                                          |
| Source     | The source of the definition of the code (when the value set draws in codes defined elsewhere).                                                                             |
| Code       | The code (used as the code in the resource instance).                                                                                                                       |
| Display    | The display (used in the display element of a Coding). If there is no display, implementers should not simply display the code, but map the concept into their application. |
| Definition | An explanation of the meaning of the concept.                                                                                                                               |
| Comments   | Additional notes about how to use the code.                                                                                                                                 |

All code words shall be encoded in UTF-8. However, only ASCII characters will be allowed. In a nutshell, the following
characters are allowed:

- **a-z** (lowercase only)
- **0-9** (digits - _Permitted, but discouraged for use in classification codes._)
- **\_** (underscore)

## Errata

A Code System may include an errata section to provide further context or background information relevant to the domain.
Additional supplementary information and reference guides may also be cross referenced here.
