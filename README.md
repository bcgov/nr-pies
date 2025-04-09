# NR Permitting Interoperability Exchange Specification

[![Lifecycle:Maturing](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)
[![Powered By](https://img.shields.io/badge/Powered%20By-Docusaurus-3ECC5F?logo=docusaurus)](https://docusaurus.io/)

An easy as pie way to exchange standardized permitting information. 🥧

This website is built using [Docusaurus](https://docusaurus.io/), a modern
static website generator.

## Directory Structure

```txt
.github/                   - GitHub PR and Issue templates
.vscode/                   - VSCode environment configurations
blog/                      - Blog Content Root (Dormant)
docs/                      - Docs Content Root
├── docusaurus/            - Docusaurus Tutorials
├── intro/                 - PIES General Information
├── spec/                  - PIES Technical Specification
│   ├── concept/           - PIES Concept Maps
│   ├── data/              - PIES Data Type Schemas
│   ├── message/           - PIES Message Type Schemas
│   ├── resource/          - PIES Resource Type Schemas
│   └── tags.yaml          - Canonical documentation tags
├── src/                   - Docusaurus Source Code
└── static/                - Site Static Assets
bcgovpubcode.yml           - BCGov Repository Metadata
CODE-OF-CONDUCT.md         - Code of Conduct
COMPLIANCE.yaml            - BCGov PIA/STRA compliance status
CONTRIBUTING.md            - Contributing Guidelines
docusaurus.config.ts       - Main Docusaurus configuration
LICENSE                    - License (Code)
LICENSE-docs               - License (Documentation)
renovate.json              - Mend Renovate configuration
SECURITY.md                - Security Policy and Reporting
sidebars.ts                - Main Docusaurus sidebar configuration
versionUtils.mts           - PIES Versioning Utilities
```

## Installation Guide

This section outlines how to quickly set up and run the Docusaurus site locally.

### Prerequisites

You will need the following installed on your machine before you can proceed:

- Install [Node.js 22 LTS](https://nodejs.org) or higher
- Install [VSCode](https://code.visualstudio.com)
- Install VSCode [Recommended Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
  - This can be done by searching `@recommended` in the Extensions tab, and then
    clicking the `Install Workspace Recommended Extensions` button.

### Install

```sh
npm ci
```

This command installs the dependencies as defined by the lockfile.

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

### Versioning

Releasing a version requires the following actions to be done in order:

1. Run `npm version` with argument `patch`, `minor` or `major` depending on the
   desired outcome (e.g. `npm version minor`).
2. Run `npm run version` with the semver version to be published (e.g.
   `npm run version 0.1.0`). This will create a new Docusaurus version, and run a
   script to align all the schema references appropriately.

_Note: You may run `npm run postversion` directly in the event you need to
manually align all the schema references._

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
