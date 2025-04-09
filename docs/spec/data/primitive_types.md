---
id: primitive_types
title: Primitive Types
description: Fundamental basic data types supported by JSON Schema
sidebar_position: 1
tags:
  - developer
---

[![Maturity:Standard](https://img.shields.io/badge/Maturity-Standard-blue)](../overview#maturity)

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

## String

Strings are used to represent textual information. For most scenarios, strings shall be represented in UTF-8 format, as
specified in [RFC 3629](https://datatracker.ietf.org/doc/html/rfc3629), which is an extension of the [ISO 10646-1](https://www.iso.org/standard/76835.html)
standard.

Strings may be optionally constrained by properties such as `minLength`, `maxLength` and by Regular Expression
`pattern`. In addition, there are common
[built-in](https://json-schema.org/understanding-json-schema/reference/string#built-in-formats) `format` types that a
string may represent. While we outline some of the common formats here, please refer to the JSON Schema documentation
for more detail on the available built-in format types.

### Date and Time

Date and/or time formats shall be represented in
[RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format, also commonly known as
[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). Unless otherwise specified, `date-time` shall be
internally stored and represented in a format compatible with [unix/epoch](https://en.wikipedia.org/wiki/Unix_time)
time.

If the time is specified, such as when either the `time` or `date-time` formats are used, the time representations
shall be encoded in UTC time. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#dates-and-times) for more
specific examples.

:::warning
Note that the `duration` format is not supported at this time as we are compliant with draft 07 of the JSON Schema standard.
:::

### Email

Email addresses with format `email` shall be represented in
[RFC 5321, section 4.1.2](https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2) format. Emails may also be
conveyed in internationalized format `idn-email` which will be compliant to
[RFC 6531](https://datatracker.ietf.org/doc/html/rfc6531). Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#email-addresses) for more
details.

### Hostname

Hostnames with format `hostname` shall be represented in
[RFC 1123, section 2.1](https://datatracker.ietf.org/doc/html/rfc1123#section-2) format. Hostnames may also be conveyed
in internationalized format `idn-hostname` which will be compliant to
[RFC 5890, section 2.3.2.3](https://datatracker.ietf.org/doc/html/rfc5890#section-2.3.2.3). Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#hostnames) for more
details.

### IP Address

IP Addresses may either be formatted in `ipv4` or `ipv6` formats. If IPv4 is used, it shall comply with
[RFC 2673, section 3.2](https://datatracker.ietf.org/doc/html/rfc2673#section-3.2). If IPv6 is used, it shall comply
with [RFC 2373, section 2.2](https://datatracker.ietf.org/doc/html/rfc2373#section-2.2). Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#ip-addresses) for more
details.

### Resource Identifier

Universal resource identifiers will use format `uri` and comply with
[RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986). There are other less commonly used formats described in the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#resource-identifiers).

::::warning
Note that the `uuid` format is not supported at this time as we are compliant with draft 07 of the JSON Schema standard.
Instead, uuid strings shall be constrained with the equivalent uuid versioned regular expression `pattern`. For most
cases, uuid v4 will be used. When a uuid is used, it shall comply with
[RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122). The regular expression to be used when specifying uuids will
be `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i` in order to remain version agnostic and maximize
compatibility.

:::info
While there is [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562) which extends RFC 4122 by adding in uuid
versions 6-8, these are likely not supportable with the `uuid` format yet and will require further review if and when
these newer uuid versions are used.
:::
::::

### URI Template

URI Templates with format `uri-template` provide a way to specify a Unique Resource Identifier that contains parameters
that must be substituted in before the URI may be resolved. This should comply with
[RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570). Check the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#uri-template) for
more details.

### Regular Expression

Regular expressions with format `regex` should comply with the
[ECMA 262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) dialect. Check the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/string#regular-expressions) for
more details.

## Numeric

Decimals or floating-point numbers may be represented as a type of numeric value. Note that JSON lacks the ability to
differentiate between integers and floating-point values. It is not possible to reliably infer if the value is an
integer or floating-point value solely based on the presence of a decimal point. As such, we recommend using a `number`
type in lieu of the `integer` type for most scenarios that do not require integer level precision.

Numbers and integers may be optionally constrained by properties such as `multipleOf`, `minimum`, `maximum`,
`exclusiveMinimum` and `exclusiveMaximum`. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/numeric) for more specific
examples.

## Object

Objects are used for unordered key-value mappings. In JSON, the key shall always be a [string](#string), and a
key-value pair is conventionally called a "property". As objects can have various requirements, nestings, and
structuring, there is extensive documentation outlining how objects can constrain the key namings, define the required
and/or expected properties, as well as define relationships and inclusion of other schemas into its own definition.

More specific details on what can be done can be found in the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/object).

## Array

Arrays are used to represent ordered elements. JSON permits array elements to consist of different types. As such,
array definitions may either constrain the type of elements with the `items` keyword, or use the `contains` keyword to
provide a looser expectation of what kinds of elements are expected.

Other array constraints such as `uniqueness`, `minContains`, `maxContains`, `minItems` and `maxItems` may also be used
to describe the boundaries of the array. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/array) for more specific examples.

## Boolean

Booleans are used to represent only two possible values: `true` or `false`. While certain languages may evaluate other
values to true or false, they are not accepted by JSON Schema. Ensure that booleans are evaluated and casted first
prior to encoding. Reference the
[JSON Schema documentation](https://json-schema.org/understanding-json-schema/reference/boolean) for more details.

## Null

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
- [RFC 1123](https://datatracker.ietf.org/doc/html/rfc1123) (Internet Hosts)
- [RFC 2373](https://datatracker.ietf.org/doc/html/rfc2373) (IPv6)
- [RFC 2673](https://datatracker.ietf.org/doc/html/rfc2673) (IPv4)
- [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) (Date and Time)
- [RFC 3629](https://datatracker.ietf.org/doc/html/rfc3629) (UTF-8)
- [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) (URI)
- [RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122) (UUID v1-5)
- [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321) (Email/SMTP)
- [RFC 5890](https://datatracker.ietf.org/doc/html/rfc5890) (Internationalized Domain Names)
- [RFC 6531](https://datatracker.ietf.org/doc/html/rfc6531) (Internationalized Email)
- [RFC 6570](https://datatracker.ietf.org/doc/html/rfc6570) (URI Template)
- [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) (JSON)
- [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562) (UUID v6-8)

### Errata

- [JSON Schema Version Comparison](https://ajv.js.org/guide/schema-language.html#json-schema)
