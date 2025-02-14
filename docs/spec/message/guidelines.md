---
id: guidelines
title: Guidelines
description: PIES Message transmission guidelines and best practices.
tags:
  - business
  - developer
---

PIES Message Data Types play an integral role in defining the expected structure of messages. This document outlines
the general guidelines and best practices for system to system communication.

## Identification Headers

Every PIES message must include the three main types of identification: Transaction, System, and Record. All three of
these identifiers work together to ensure that the message can be correctly identified and processed. These identifiers
must be included as a part of the JSON payload transmission.

### Transaction Identification

Each PIES transaction must be uniquely identifiable. This requires a timestamp of some kind, a unique identifier, and a
declaration of the PIES version.

#### Timestamps and Uniqueness

The PIES standard uses UUIDv7, as specified in
[RFC 9562, section 5.7](https://datatracker.ietf.org/doc/html/rfc9562#section-5.7), to address timestamping and
uniqueness. The first 48 bits of the UUID is used for the timestamp, while the rest of the bits are used for UUID
version identification and pseudo-randomity. The UUIDv7 attribute will be used to ensure that the message it is on is
unique. This attribute is named `tx_id` and will be a `string` .

In addition, as PIES is a versioned specification, it requires a declaration of which version it is compliant to. As the
version value follows semver, this attribute is named `version` and will also be a `string`.

#### Message Kind

PIES messages are categorized into different message types. These different kinds of messages will be structured to
contain different fields and structures. This attribute is named `kind` and will also be a `string`. For example, the
ProcessEventSetMessage data type would have kind set to "ProcessEventSet". This attribute is necessary because there
needs to be a clean way for parsing systems to quickly identify what kind of document is being transmitted. Inferring
the message kind without this attribute could lead to errors in parsing and processing the message.

### System Identification

PIES communication will require knowledge about which system or systems the messages are being emitted from. At this
time, we do not yet know if there is a data/system registrar that will authoritatively act as our anchor. In the
interim, we will address this by creating an attribute named `system_id`. This field may either be a `string`, or it
may be an array of strings, should it be derived from multiple systems.

### Record Identification

Finally, to ensure that the content is properly attributed to the right record in the system, we will have an attribute
named `record_id`. This field will have a type of `string`, and will likely be representative of the primary key of the
record in the source system.

## Security Considerations

As with any messaging protocol, we need to factor in how we intend to cover the security of the message. This includes
considerations for message confidentiality as well as integrity.

For most communication scenarios, PIES is intended for transfer between systems on a point-to-point basis. While there
are future plans for potentially having a pub/sub model for message transfer, this will be out of scope in the interim.
The best way for us to ensure point-to-point confidentiality is to make sure we are using standard protocols such as
HTTPS/TLS connections, as this would be sufficient.

To potentially address future concerns of integrity in a pub/sub model, things such as the JSON Canonicalization Scheme
(JCS) in [RFC 8785](https://datatracker.ietf.org/doc/html/rfc8785) may be used to ensure that the PIES messages haven't
been tampered with via some form of JWT/JOSE signing pattern. However, this will be out of scope for now and revisited
when it becomes required.

## References

- [RFC 8785](https://datatracker.ietf.org/doc/html/rfc8785)
- [RFC 9562, section 5.7](https://datatracker.ietf.org/doc/html/rfc9562#section-5.7)
