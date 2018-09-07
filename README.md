[![Castt](https://img.shields.io/badge/castt-purple.svg?style=for-the-badge)](http://castt.app)

# Castt Moleculer Template

[![A Cubefuse Project](https://img.shields.io/badge/a_project_by-cubefuse-blue.svg?style=for-the-badge)](http://cubefuse.org)


>  Template for generating microservices for Castt.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [NPM Scripts](#npm-scripts)
- [Credits](#credits)
- [Copyright](#copyright)


## Features
- Moleculer v0.13.x
- Separate configurations for development and production
- Automatic boilerplate generation
- NATS Transporter 
- Redis Cacher
- Docker & Docker Compose files
- Unit tests with [Jest](http://facebook.github.io/jest/)
- Lint with [ESLint](http://eslint.org/)
- Launch file for debugging in [VSCode](https://code.visualstudio.com/)


## Usage
To install use the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

```bash
$ moleculer init gitlab:cubefuse/castt/moleculer-template sample-microservice
```


## NPM scripts
- `npm run dev` - Start service.js with hot-reloading and REPL.
- `npm lint` - Run linting
- `npm run ci` - Start testing in watch mode
- `npm start` - Start service.js in production mode
- `npm test` - Run tests & generate coverage report

## Credits
This template is based on [moleculer-template-nano](https://github.com/moleculerjs/moleculer-template-nano) by icebob
and Moleculer project contributors.

## Copyright

Copyright © 2018- Cubefuse. All Rights Reserved.

Portions copyright (c) 2018 MoleculerJS under MIT License.

Unauthorized copying via any medium is strictly prohibited.

Proprietary and confidential.
