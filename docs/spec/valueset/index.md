---
id: meta
title: Meta 🚧
description: PIES Value Set
sidebar_position: 1
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/spec#maturity)

Official URL: `https://bcgov.github.io/nr-pies/docs/spec/valueset`

This Value Set is used or referenced by:

- Code System: [TBD](.)

A Value Set is a collection of codes from one or more Code Systems. It specifies which codes are allowed or required in
a particular context.

## Expansion

Every Value Set shall contain a table enumerating the set of relevant code words that are useable.

- Code System tables shall contain the following columns: `Code`, `Display` and `Definition`.
- Code System tables may contain the following columns when necessary: `Source` and `Comments`.

| Code          | System                                                                   | Display     | Description                                                              |
| ------------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------ |
| `application` | https://bcgov.github.io/nr-pies/docs/spec/codesystem/application_process | Application | A submitted form(s) with the intent to obtain or amend an authorization. |
