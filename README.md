# NR Permitting Interoperability Exchange Specification

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)
[![Powered By](https://img.shields.io/badge/Powered%20By-Docusaurus-3ECC5F?logo=docusaurus)](https://docusaurus.io/)

An easy as pie way to exchange standardized permitting information. 🥧

This website is built using [Docusaurus](https://docusaurus.io/), a modern
static website generator.

## Directory Structure

```txt
.github/                   - PR, Issue templates
.vscode/                   - VSCode environment configurations
blog/                      - Blog Content Root (Dormant)
docs/                      - Docs Content Root
├── docusaurus/            - Docusaurus Tutorials
├── intro/                 - PIES General Information
├── spec/                  - PIES Technical Specification
│   ├── schemas/           - PIES Schema Documentation
│   ├── types/             - PIES Data Types Documentation
│   └── tags.yaml          - Canonical documentation tags
├── src/                   - Docusaurus Source Code
└── static/                - Site Static Assets
CODE-OF-CONDUCT.md         - Code of Conduct
COMPLIANCE.yaml            - BCGov PIA/STRA compliance status
CONTRIBUTING.md            - Contributing Guidelines
LICENSE                    - License (Code)
LICENSE-docs               - License (Documentation)
SECURITY.md                - Security Policy and Reporting
```

## Installation Guide

### Get VSCode

### Install Recommended Extensions

### Install

```sh
npm ci
```

### Run Local Development

```sh
npm run start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Static Build

```sh
npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

---

### Deployment Notes

The following steps are not necessary in order to contribute to PIES as this
repository contains a dedicated CI/CD pipeline.

Using SSH:

```sh
USE_SSH=true npm run deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.

## Getting Help or Reporting an Issue

To report bugs/issues/features requests, please file an
[issue](https://github.com/bcgov/nr-pies/issues).

## How to Contribute

If you would like to contribute, please see our [contributing](CONTRIBUTING.md)
guidelines.

Please note that this project is released with a
[Contributor Code of Conduct](CODE-OF-CONDUCT.md). By participating in this
project you agree to abide by its terms.

## License

This repository is dual licensed.

- _Software or code_ by the Province of British Columbia is licensed under an
[AGPL v3 License](./LICENSE)
[![AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

  ```txt
  NR Permitting Interoperability Exchange Specification
  Copyright 2024 Province of British Columbia

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  ```

- _Documentation_ by the Province of British Columbia is licensed under a
[Creative Commons Attribution 4.0 International License](./LICENSE-docs)
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)
