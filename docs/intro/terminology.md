---
id: terminology
title: Terminology
description: The definitions of specific technical terms and concepts used in PIES
tags:
  - business
  - developer
---

This page provides an overview and guide to the PIES resources, operations and concepts used for representing and
communicating coded, structured data within this specification. Collectively, these concepts are used to provide a
common definition and framework for traversing the coded concepts within PIES.

## Acronyms

| Term | Definition |
| --- | --- |
| LOB | Line of Business |

## Concepts

| Term | Definition | ??? |
| --- | --- | --- |
| Activity | A single, specific defined intent of action in a parcel. An activity may require one or more authorizations, e.g., a housing development project. | |
| Activity Bundling | The act of identifying the set of permits required for a certain activity. | This should be refined, not sure if this should belong here as it's not a formal process but a description of a relationship |
| Application | A submitted form(s) with the intent to obtain or amend a permit | |
| Authorization | The act of granting permission to perform a specific activity in a parcel within the Province of BC. Authorizations may take various forms, including a permit, license, tenure, lease, right-of-way, agreement, grant, statutory right, interest or title. | |
| Caseload | Work happening with the LOB to facilitate, capture and maintain a permit. | |
| Disposition | ??? | ??? |
| Parcel | A polygon representation of a designated area, location or jurisdiction. Parcels may have varying degrees of accuracy which may or may not come from surveyor submissions. | Rephrased from LTSA page |
| Permit | An official document which grants permission to carry out a specific activity, such as land use, in a parcel within the Province of BC. In the context of permitting modernization, it is being used as a term for any type of authorization. | |
| Project | A set of applications required for a permit | ??? |
| Proponent | A person, group or organization seeking to perform a set of activities in a specific parcel. | |
| State | A description of the current condition of an application within a defined process. | Scope to app? |
| Status | A description of the current condition of a permit within a defined process. | Scope to permit? |
| Submission | The output single submitted form from a proponent as a part of an application.| |
| Workload | A quantifiable measurement of the number of client-driven applications in the queue. | |

## Structure

The following terms describe the structural definitions of the specification ordered from specific to general.

### Data Type

A primitive data type is one of the most fundamental principles for defining what type of information a piece of data
is. Common data types are: boolean, integer, string, and date.

### Identifiers

Identifiers provide a shorthand way to reference a unit of data or a specific entry in a codelist or classification
scheme. Typically identifiers are intended to be unique within a local or global context (UIDs, and UUIDs). This can
include both UUIDs intended to serve as their own widely used standards as well as commonly used code lists and
classification schemes. For example, "CA" is the ISO 3166-1 alpha-2 code for Canada while 515112 is the North American
Industry Classification System (NAICS) code for FM radio stations.

### Vocabulary

A vocabulary establishes standardized terms with consistent semantic definitions. These are typically constrained to a
particular namespace or domain. The terms are the machine readable labels for individual data elements or a group of
data elements. They can be thought of as the column headings in a spreadsheet of tabular data along with their
definitions in a data dictionary. For example, the Dublin Core Metadata Initiative establishes a term and definition
for a variety of common metadata elements like "publisher."

### Schema

A schema can be a data model or database schema defining relationships between different pieces of information. Schemas
can be described using SQL, UML, XSD, or JSON Schema.

### Format

The format or "serialization format" is the syntax, encoding, and file format or media type for storing or transmitting
your data. On the web, formats are associated with standardized media type identifiers, like application/json. Common
data formats include JSON, CSV, and XML.

### API

An application programming interface (API) is a predefined protocol for reading and/or writing data using a filesystem,
a database, or across a network. Common types of data APIs include OBDC and SQL for databases and REST APIs for the web.
