---
id: primitives
title: Primitives
description: Fundamental basic data types supported by JSON Schema
tags:
  - developer
---

Every data standard must have a core set of fundamental data types that content will be transmitted in. Since the
Permitting Interoperability Exchange Specification is built on top of the [JSON Schema](https://json-schema.org/)
standard, it will leverage the conventions specified in that standard. The PIES specification will be compliant to the
`draft 07` specification of the JSON Schema standard. While there exists more recent draft versions, notably the
`draft 2020-12` standard, features that were introduced after `draft 07` will not be defined and used at this time in
order to maximize compatibility with implementor systems.

## JSON Schema Primer

A JSON Schema is commonly used to define, annotate and verify JSON structured documents and content. It serves as a way
to explicitly define the structural expectations for a specific type of document. While JSON Schema is good for
describing expected structures, describing conceptual relationships between related topics and domains

A JSON Schema will typically contain the following attributes:

- `$schema` - This describes the draft level this JSON Schema complies to. For PIES, this property will normally be `https://json-schema.org/draft-07/schema`.
- `$id` - The unique URI for this schema. The path should ideally contain an obvious versioning nomenclature.
- `$comment` - A free text field for conveying out of band information about the schema. Comments are useful for
specification readers and editors to understand further nuances for certain properties and structures, but should not
be relied upon for implementation as they may be skipped over or stripped when parsed by machines.
- `title` - The intent of the schema. This should be brief and concise.
- `description` - A brief description about the schema. This should provide a quick overview for the context of usage.
- `properties` - A set of attributes that are expected to show up in this document type.
- `required` - An array defining the set of `properties` that must be present for the document to be considered valid.
Anything defined that is not in this array is implied to be optional.
- `type` - The type primitive constraint for the property.

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

#### Date and Time

Date and/or time formats shall be represented in
[RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format, also commonly known as
[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). Unless otherwise specified, `date-time` shall be
internally stored and represented in a format compatible with [unix/epoch](https://en.wikipedia.org/wiki/Unix_time)
time.

If the time is specified, such as when either the `time` or `date-time` formats are used, the time representations
shall be aligned to UTC time. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#dates-and-times) for more
specific examples.

Note that the `duration` format is not supported at this time as we are compliant with draft 07 of the JSON Schema standard.

#### Email

Email addresses with format `email` shall be represented in
[RFC 5321, section 4.1.2](https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2) format. Emails may also be
conveyed in internationalized format `idn-email` which will be compliant to
[RFC 6531](https://datatracker.ietf.org/doc/html/rfc6531). Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#email-addresses) for more
details.

#### Hostname

#### IP Address

#### Resource Identifier

#### URI Template

URI Templates with format `uri-template` provide a way to specify a Unique Resource Identifier that contains parameters
that must be substituted in before the URI may be resolved. This should comply with
[RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570). Check the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#uri-template) for
more details.

#### Regular Expression

Regular expressions with format `regex` should comply with the
[ECMA 262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) dialect. Check the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#regular-expressions) for
more details.

### Numeric

Decimals or floating-point numbers may be represented as a type of numeric value. Note that JSON lacks the ability to
differentiate between integers and floating-point values. It is not possible to reliably infer if the value is an
integer or floating-point value solely based on the presence of a decimal point. As such, we recommend using a `number`
type in lieu of the `integer` type for most scenarios that do not require integer level precision.

Numbers and integers may be optionally constrained by properties such as `multipleOf`, `minimum`, `maximum`,
`exclusiveMinimum` and `exclusiveMaximum`. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/numeric) for more specific
examples.

### Object

Objects are used for unordered key-value mappings. In JSON, the key shall always be a [string](#string), and a
key-value pair is conventionally called a "property". As objects can have various requirements, nestings, and
structuring, there is extensive documentation outlining how objects can constrain the key namings, define the required
and/or expected properties, as well as define relationships and inclusion of other schemas into its own definition.

More specific details on what can be done can be found in the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/object).

### Array

Arrays are used to represent ordered elements. JSON permits array elements to consist of different types. As such,
array definitions may either constrain the type of elements with the `items` keyword, or use the `contains` keyword to
provide a looser expectation of what kinds of elements are expected.

Other array constraints such as `uniqueness`, `minContains`, `maxContains`, `minItems` and `maxItems` may also be used
to describe the boundaries of the array. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/array) for more specific examples.

### Boolean

Booleans are used to represent only two possible values: `true` or `false`. While certain languages may evaluate other
values to true or false, they are not accepted by JSON Schema. Ensure that booleans are evaluated and casted first
prior to encoding. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/boolean) for more details.

### Null

Null is used to represent no value, and can only have a single acceptable value `null`. Note that null does not equate
to the absence of a value, or undefined. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/null) for more details.

## References

### Government Standards

- [Address Data Standards: Mailing, Delivery and Residential](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/address_data_standards_-_mailing_delivery_residential.pdf)
- [Date and Time Standard](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/date_and_time_standard.pdf)
- [B.C. Health Information Standards for Date and Time](https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/health-information-standards/standards-catalogue/date-time)
- [Naming and Describing](https://bcgov.github.io/data-publication/pages/dsg_naming_describing.html)

### Technical Standards

- [ECMA 262](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
- [JSON Schema Types](https://json-schema.org/understanding-json-schema/reference/type)
- [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) (Date and Time)
- [RFC 3629](https://datatracker.ietf.org/doc/html/rfc3629) (UTF-8)
- [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321) (Email/SMTP)
- [RFC 6531](https://datatracker.ietf.org/doc/html/rfc6531) (Internationalized Email)
- [RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570) (URI Template)
- [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) (JSON)

### Errata

- [JSON Schema Version Comparison](https://ajv.js.org/guide/schema-language.html#json-schema)
