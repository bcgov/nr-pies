---
id: terminology
title: Terminology 🚧
description: The definitions of specific technical terms and concepts used in PIES
tags:
  - business
  - developer
---

[![Maturity:Planning](https://img.shields.io/badge/Maturity-Planning-orange)](../spec/overview#maturity)

This page provides an overview and guide to the PIES resources, operations and concepts used for representing and
communicating coded, structured data within this specification. Collectively, these concepts are used to provide a
common definition and framework for traversing the coded concepts within PIES.

## Acronyms

| Term | Definition       |
| ---- | ---------------- |
| LOB  | Line of Business |

## Concepts

The following terms outline the main concepts used within this specification and aim to provide a common lexicon for
understanding and terminology usage.

### Actors

This section discusses the various roles that a person, group or an organization may act as within the context of PIES.

| Term                  | Definition                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Applicant             | A person, group or organization seeking an authorization to perform a set of actions.                                                                                                      |
| Decision Maker        | A statutory decision maker (SDM) are the persons with designated authority by their respective Ministry legislation to issue authorizations, approvals, and similar decisions.             |
| Facilitator           | An established role which focuses on delivering dedicated support to applicants on application submissions.                                                                                |
| Interested Party      | A person, or group which may be impacted by an authorization decision.                                                                                                                     |
| Local Government      | A Municipality or Regional District within the Province. They are the entity providing development, use and building approval on a parcel within their jurisdiction.                       |
| Navigator             | A synonym for a facilitator.                                                                                                                                                               |
| Proponent             | A synonym for an applicant.                                                                                                                                                                |
| Referral Agency       | A provincial Ministry, local government, or government agency that receives notices for an application. They may be given the opportunity to provide input and comments on an application. |
| Subject Matter Expert | A subject matter expert (SME) is a specialist of a specific domain, such as authorization processes, software, and policy.                                                                 |

### Definitions

This section outlines the definitions and common vocabulary used for representing specific concepts within PIES.

| Term              | Definition                                                                                                                                                                                                                                                                             | ???                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Action            | A regulated action is a specific defined piece of work that may be bounded by an Area of Interest as defined by a referral agency.                                                                                                                                                     |                                                                                                                              |
| Activity          | A specific task that may be a part of a larger ongoing or routine process. It is defined by a set of one or more regulated actions within an area of interest as defined by a referral agency. An activity may require one or more authorizations.                                     |                                                                                                                              |
| Activity Bundling | The act of identifying the set of permits required for a certain activity.                                                                                                                                                                                                             | This should be refined, not sure if this should belong here as it's not a formal process but a description of a relationship |
| Application       | A submitted form(s) with the intent to obtain or amend an authorization.                                                                                                                                                                                                               | This might be getting muddled with the concept of a project.                                                                 |
| Area of Interest  | A defined location where an action is to be performed. It may be specified by Coordinates, GeoJSON, or by Parcels.                                                                                                                                                                     | Addresses may potentially be usable.                                                                                         |
| Authorization     | The act of granting permission to perform a specific action in a parcel within the Province of BC. Authorizations may take various forms, including a permit, license, tenure, lease, right-of-way, agreement, grant, statutory right, interest or title.                              | We might need to expand this definition over time as this is the formal umbrella term for many things.                       |
| Caseload          | Work happening with the LOB to facilitate, capture and maintain a permit.                                                                                                                                                                                                              |                                                                                                                              |
| Disposition       | The final decision or outcome made by a statutory decision maker regarding an application. It essentially indicates what action has been taken with respect to the application, and can be represented by a state.                                                                     | First attempt at defining - needs review                                                                                     |
| License           | A formal authorization permission to engage in a particular action, often for commercial purposes. Licenses are usually granted for a set duration and can be subject to conditions, fees, and regulations.                                                                            |                                                                                                                              |
| Parcel            | A polygon representation of a designated area, location or jurisdiction. Parcels may have varying degrees of accuracy which may or may not come from surveyor submissions.                                                                                                             | Rephrased from LTSA page                                                                                                     |
| Permit            | A temporary, conditional authorization granting permission for a specific action within a defined period. It outlines the scope, requirements, and limitations of the action and may be subject to renewal or revocation.                                                              | In permitting modernization, the term broadly refers to various types of authorization.                                      |
| Project           | A temporary, goal-oriented effort designed to achieve a particular outcome within a defined timeframe and scope. It is defined by a set of one or more regulated actions within an area of interest as defined by a referral agency. A project may require one or more authorizations. |                                                                                                                              |
| Submission        | The completed output of a single form as answered by an applicant.                                                                                                                                                                                                                     | Add a note like "Submissions require an adjective declaring their application context"?                                      |
| System            | A collection of interconnected software and/or hardware components that supports business operations. Permitting systems will typically facilitate the application process for a specific authorization.                                                                               |                                                                                                                              |
| Tenure            | A long-term, often transferable authorization for the right to use, occupy, or control land or resources. It establishes a legal claim to land or resources, often with conditions on usage and maintenance.                                                                           |                                                                                                                              |
| Workload          | A quantifiable measurement of the number of client-driven applications in the queue.                                                                                                                                                                                                   |                                                                                                                              |

The following diagram outlines a high level relational map between all the actors (with rounded borders) and how they
interact with specific parts of the process.

```mermaid
---
title: Actor-Process Workflow
---
%% v11 broke and made all links have arrow heads
%% Ref: https://github.com/mermaid-js/mermaid/issues/5813
flowchart TB
  Action@{ shape: dbl-circ }
  AP@{ label: "Activity /\nProject"}
  Applicant@{ shape: stadium }
  DM@{ shape: stadium, label: "Decision
    Maker" }
  Facilitator@{ shape: stadium }
  IP@{ shape: stadium, label: "Interested
    Party" }
  Issues@{ shape: diamond }
  License@{ shape: docs }
  LG@{ shape: stadium, label: "Local
    Government" }
  Parcel@{ shape: docs }
  Permit@{ shape: docs }
  SME@{ shape: stadium, label: "Subject
    Matter Expert" }
  Submission@{ shape: docs }
  Tenure@{ shape: docs }

  Action ==>|Within an| AOI
  AP -->|Specifies one or more| Action
  AP -.-|Requires one or more| Application
  Applicant -->|May define an| AP
  Applicant ==>|Completes an| Application
  Application -->|Seeking an| Authorization
  Application ==>|Notifies| DM
  Authorization ==>|Grants permission for| Action
  Authorization ---|Bounded by| AOI
  Authorization -->|May impact| IP
  DM ==> Issues ==> Authorization
  DM <-..->|Communicates with| LG
  Facilitator -.->|Identifies| Authorization
  Facilitator -.->|Assists| Applicant
  Facilitator <-.->|Coordinates with| DM
  Facilitator <-.->|Works with| SME
  IP <-..->|Consults with| DM
  SME -.->|Informs| DM

  subgraph AOI[Area of Interest]
    Coordinates
    GeoJSON
    Parcel
  end
  subgraph Application
    Submission
  end
  subgraph Authorization
    License
    Permit
    Tenure
  end
  subgraph RA[Referral Agency]
    DM
    Facilitator
    LG
    SME
  end
  subgraph System
    Application
    Authorization
  end
```

### Process Tracking

This section outlines the definitions and common vocabulary used for representing specific concepts within a process.

| Term      | Definition                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lifecycle | Represents the complete ordered sequencing of phases that an application and an authorization may pass through. A lifecycle should describe the entire scope of processing that can occur from beginning to end.                                                                                                                                 |
| Phase     | A distinct period or division within a lifecycle. A phase will represent a broader set of stages and usually comes with specific objectives or outcomes. A phase shall be a defined member of a specific lifecycle.                                                                                                                              |
| Stage     | A discrete, ordered set or collection of states. A stage defines a sequential order of states that the process must go through. A stage shall be a defined member of a phase.                                                                                                                                                                    |
| State     | A description of the current condition of an application or authorization within the larger process or workflow (e.g., "Submitted", "Approved"). A state shall map to a broader stage definition.                                                                                                                                                |
| Status    | A description of the current condition or update of an application or authorization. Additional details about the current state are frequently conveyed (e.g., "Pending Review", "Under Inspection"). Statuses may be defined by the line of business. All defined statuses shall have a concept mapping to a broader state definition or above. |

The following diagram outlines a high level categorization map between all of the process terms and how they relate to
each other.

```mermaid
---
title: Process Tracking Concept Map
---
flowchart LR
  Status@{ shape: processes }

  subgraph Lifecycle
    subgraph Phase
      subgraph Stage
        subgraph State
          Status
        end
      end
    end
  end
```

## Structure

The following terms describe the structural definitions of the specification ordered from specific to general.

| Term        | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Type   | A primitive data type is one of the most fundamental principles for defining what type of information a piece of data is. Common data types are: boolean, integer, string, and date.                                                                                                                                                                                                                                                                                                                                                               |
| Identifiers | Identifiers provide a shorthand way to reference a unit of data or a specific entry in a codelist or classification scheme. Typically identifiers are intended to be unique within a local or global context (UIDs, and UUIDs). This can include both UUIDs intended to serve as their own widely used standards as well as commonly used code lists and classification schemes. For example, "CA" is the ISO 3166-1 alpha-2 code for Canada while 515112 is the North American Industry Classification System (NAICS) code for FM radio stations. |
| Vocabulary  | A vocabulary establishes standardized terms with consistent semantic definitions. These are typically constrained to a particular namespace or domain. The terms are the machine readable labels for individual data elements or a group of data elements. They can be thought of as the column headings in a spreadsheet of tabular data along with their definitions in a data dictionary. For example, the Dublin Core Metadata Initiative establishes a term and definition for a variety of common metadata elements like "publisher."        |
| Schema      | A schema can be a data model or database schema defining relationships between different pieces of information. Schemas can be described using SQL, UML, XSD, or JSON Schema.                                                                                                                                                                                                                                                                                                                                                                      |
| Format      | The format or "serialization format" is the syntax, encoding, and file format or media type for storing or transmitting your data. On the web, formats are associated with standardized media type identifiers, like application/json. Common data formats include JSON, CSV, and XML.                                                                                                                                                                                                                                                             |
| API         | An application programming interface (API) is a predefined protocol for reading and/or writing data using a filesystem, a database, or across a network. Common types of data APIs include OBDC and SQL for databases and REST APIs for the web.                                                                                                                                                                                                                                                                                                   |
