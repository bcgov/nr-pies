---
id: overview
title: Overview 🔬
description: Purpose and intent of the standard
sidebar_position: 1
tags:
  - business
  - developer
  - executive
---

[![Maturity:Trial](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)

## Purpose

Permitting is a complex space. B.C.’s Natural Resource Ministries (NRM) has hundreds of authorization types with many
ways to collect, process and store information from intake to decision to maintenance.

Analytics and reporting and permitting reform is difficult for many reasons including data quality and inconsistencies
with collection and capture. For permitting systems to integrate there must be a common language.

The Permitting Interoperability Exchange Specification (PIES) contains both the standards and the specifications to
enable data integration. This section of PIES will be called the standard throughout the document. It defines the
foundational set of core descriptive data elements required to enable the compatibility and interoperability of Natural
Resource permitting ecosystems, as well as define the purpose and characteristics of permitting.

It will enable better business intelligence, i.e., providing evidence for policy shifts and permitting process
improvements while enabling flexibility to adapt to shifts in direction on permitting.

## Description

For this document the overarching term “authorization” is used to describe all the different types of permission to
proceed with an activity within the province of B.C.

## Authority

This specification is defined under the authority of the Chief Information Officer for the Natural Resource Ministries.

## Advice on this standard

For questions or comments regarding this standard, please contact:

[NRM.PermittingAndData@gov.bc.ca](mailto:NRM.PermittingAndData@gov.bc.ca),
Natural Resource Information and Digital Services Division.

## Application of the specification

Natural Resource Ministries managing permitting data are to collect data with the objectives of this standard.

This standard applies to authorizations within the permitting ecosystem of the B.C. government.

The greater public sector assigned to the Natural Resource Ministries are encouraged to collect data with the objectives
of this specification.

Other B.C. government Ministries may also leverage this specification.

## Collection

Evaluate the permitting services for your program and determine when a data element in this standard may or may not apply.

## General guidance

- The objective of the collection of the data type may also be met by collecting the data in multiple data points or
  with a different name.
- It is important to maintain consistency within an existing permitting ecosystem, therefore the objective of the data element
  is to be met but may not align directly.
- For new permitting systems this specification is to be leveraged as a basis for implementation of the collection of data.
- The exact structure of these column names may depend on other standards that are in place for the specific programming
  language or database management systems. Possibilities include:
  - Underscores between words, e.g., submitted_date
  - Upper case, e.g., SUBMITTED_DATE
  - Camel case, e.g., submittedDate
  - Title case, e.g., SubmittedDate

### Element format

| Section   | Description                                                                                                                                                                                           | Example                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Purpose:  | A clear summary of the intent or function of the data element. Describes the conceptual role it plays in the permitting process, including what type of information it aims to capture or categorize. | To capture the distinct phases that an authorization passes through during the application lifecycle, providing a standardized structure for tracking and reporting. |
| Usage:    | An explanation of how this data element is expected to be applied with respect on an authorization. Focuses on how and when the element is used in permitting related systems.                        | Used by a permitting system to capture the high-level position of an application within its process flow.                                                            |
| Guidance: | Practical advice for applying the element consistently. Clarifies common points of confusion, boundaries for interpretation, and things to avoid.                                                     | Do not use the same label for a Stage and a Status. Stage names should reflect high-level work categories (e.g. Intake, Review), not procedural states.              |

## Maturity

The standard is still actively being developed. While it has been developed to a point where it may be used
for practical purposes, some areas of the standard will not be as fully defined or have not yet been come to a consensus.
Refer to the following table for a description of each maturity level.

| Maturity Level | Emoji | Badge                                                                                                         | Description                                                                                                                                                                                                  |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deprecated     | ⚠️    | [![Maturity:Deprecated](https://img.shields.io/badge/Maturity-Deprecated-lightgrey)](/docs/standard#maturity) | This artifact is no longer recommended for use and may be removed in a future release.                                                                                                                       |
| Planning       | 🚧    | [![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](/docs/standard#maturity)        | This artifact is still in the early stages, where brainstorming, research, and organization are taking place. It is not yet ready for use yet.                                                               |
| Draft          | 📝    | [![Maturity:Draft](https://img.shields.io/badge/Maturity-Draft-yellow)](/docs/standard#maturity)              | This artifact has a preliminary structure and is being reviewed for accuracy, completeness, and usability. It could be used, but some areas may still need improvement and may have major changes over time. |
| Trial          | 🔬    | [![Maturity:Trial](https://img.shields.io/badge/Maturity-Trial-green)](/docs/standard#maturity)               | This artifact has been developed to a point where it may be used for practical purposes. It may be used, but some areas may still need refinement and may have minor changes over time.                      |
| Standard       | None  | [![Maturity:Standard](https://img.shields.io/badge/Maturity-Standard-blue)](/docs/standard#maturity)          | This artifact has been fully developed and has been ratified as a part of the standard. It can be used in production environments.                                                                           |

Each artifact in the specification may potentially be suffixed by an emoji indicating their maturity level. In addition,
each artifact's page will also contain a maturity level badge.
