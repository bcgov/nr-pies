---
id: formatting
title: Formatting
description: The syntax, encoding and file format used by PIES
sidebar_position: 1
tags:
  - developer
---

Every data standard must have a core set of fundamental data types that content will be transmitted in. Since the
Permitting Interoperability Exchange Specification is built on top of the [JSON Schema](https://json-schema.org/)
standard, it will leverage the conventions specified in that standard, including
[RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) which defines JSON. The PIES specification will be compliant
to the `draft 07` specification of the JSON Schema standard. While there exists more recent draft versions, notably the
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

## References

- [Draft 07](https://json-schema.org/draft-07)
- [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259) (JSON)
- [JSON Schema Version Comparison](https://ajv.js.org/guide/schema-language.html#json-schema)
