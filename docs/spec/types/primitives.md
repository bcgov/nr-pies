---
id: primitives
title: Primitives
description: Fundamental basic data types supported by JSON Schema
tags:
  - developer
---

Every data standard must have a core set of fundamental data types that content will be transmitted in. Since the
Permitting Interoperability Exchange Specification is built on top of the JSON Schema standard, it will leverage the
conventions specified in that standard. The PIES specification will be compliant to the `draft 07` specification of the
JSON Schema standard. While there exists more recent draft versions, notably the `draft 2020-12` standard, features that
were introduced after `draft 07` will not be defined and used at this time in order to maximize compatibility with
implementor systems.

## JSON Schema Types

The JSON Schema specifies fundamental
[data types](https://json-schema.org/understanding-json-schema/reference/type)
that can be used and defined within a schema.

- [string](https://json-schema.org/understanding-json-schema/reference/string)
- [number](https://json-schema.org/understanding-json-schema/reference/numeric#number)
- [integer](https://json-schema.org/understanding-json-schema/reference/numeric#integer)
- [object](https://json-schema.org/understanding-json-schema/reference/object)
- [array](https://json-schema.org/understanding-json-schema/reference/array)
- [boolean](https://json-schema.org/understanding-json-schema/reference/boolean)
- [null](https://json-schema.org/understanding-json-schema/reference/null)

These types are consistent with what can be expected within the standardized JavaScript Object Notation (JSON) format
([RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259)). Most implementation languages support these constructs, but
may represent them with different names. We recommend referring to the
[JSON schema data types](https://json-schema.org/understanding-json-schema/reference/type) documentation as a primary
source for standards representation guidance, followed by the [government standards guidance](#government-standards) and
ensuring that the content represent meets both.

### String

Strings are used to represent textual information. For most scenarios, strings shall be represented in UTF-8 format, as
specified in [RFC 3629](https://datatracker.ietf.org/doc/html/rfc3629), which is an extension of the [ISO 10646-1](https://www.iso.org/standard/76835.html)
standard.

Strings may be optionally constrained by properties such as `minLength`, `maxLength` and by Regular Expression
`pattern`. In addition, there are common
[built-in](https://json-schema.org/understanding-json-schema/reference/string#built-in-formats) `format` types that a
string may represent. While we outline some of the common formats here, please refer to the JSON Schema documentation
for more detail on the available built-in format types.

#### Dates and Times

Date and/or time formats shall be represented in
[RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format, also commonly known as
[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). Unless otherwise specified, date-time shall be
internally stored and represented in a format compatible with [unix/epoch](https://en.wikipedia.org/wiki/Unix_time)
time. If the time is specified, such as when either the `time` or `date-time` formats are used, the time representations
shall be aligned to UTC time. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#dates-and-times) for more
specific examples.

### Numeric

### Object

### Array

### Boolean

### Null

## References

### Government Standards

- [Address Data Standards: Mailing, Delivery and Residential](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/address_data_standards_-_mailing_delivery_residential.pdf)
- [Date and Time Standard](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/date_and_time_standard.pdf)
- [B.C. Health Information Standards for Date and Time](https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/health-information-standards/standards-catalogue/date-time)
- [Naming and Describing](https://bcgov.github.io/data-publication/pages/dsg_naming_describing.html)

### Technical Standards

- [JSON Schema Types](https://json-schema.org/understanding-json-schema/reference/type)
- [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) (Date and Time)
- [RFC 3629](https://datatracker.ietf.org/doc/html/rfc3629) (UTF-8)
- [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) (JSON)
