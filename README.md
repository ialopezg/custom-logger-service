<div align="center">  
  <h1>Custom Logger Service</h1>
</div>
<div align="center">
  <strong>Custom tools for NodeJS</strong>
</div>
<br />

> Custom Logger for Apps and API Services

<div align="center">
  
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/ialopezg/custom-logger-service/badge.svg?branch=main)](https://coveralls.io/github/ialopezg/custom-logger-service?branch=main)
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/ialopezg" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/ialopezg" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-paypal"><a href="https://www.paypal.me/isidrolopezg" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="Open Collective donate button" /></a></span>

</div>

## Description

CUstomLoggerService is an utility service that helps you to display debugging, error, informative, log, and warning messages. This tool is made to be used in [Node.js](https://nodejs.org), which allows you to easily build efficient,
scalable applications. It uses modern JavaScript, is built with [TypeScript](https://typescriptlang.org) and
bring best JavaScript concepts.

## Technology Stack

<div align="center">

![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=plastic&logo=visual-studio-code)
![Shell](https://img.shields.io/badge/-Shell-blasck?style=plastic&logo=Shell)
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github)
![Node.JS](https://img.shields.io/badge/-Node.JS-black?style=plastic&logo=Node.js)
![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=typescript)
![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)

</div>

## Features

- Compatible with both TypeScript and ES6 (I recommend to use [TypeScript](http://www.typescriptlang.org))

## Getting started

### Requirements

- [NodeJS](https://nodejs.org/) v8+
- [NPM](https://www.npmjs.com/package/npm) v6+ or [yarn](https://yarnpkg.com/) v1.17+
- [custom-console-colors](https://www.npmjs.com/package/custom-console-colors)

### Installation

You have two options to install this repository.
1. By adding the dependency to your `package.json` file.

   ```json
   {
     "dependencies": {
       "custom-logger-service": "^0.2.2"
     }
   }
   ```

   ```bash
   # Install dependencies
   # NPM
   npm install
   # or Yarn
   yarn
   ```

2. By using a package manager
   ```bash
   # NPM
   npm install --save custom-console-color
   # or Yarn
   yarn add @ialopezg/core
   ```

### Usage

#### Initialization
__Default options__
```javascript
const { LoggerService } = require('custom-logger-service')

// With default options
const logger = new Logger();
```

__No options nor styles__
```javascript
const logger = new Logger({
  useFormat: false,
});
```

__No options and default format__
```javascript
const config: FormatOptions = {
  useFormat: true,
  useAppName: false,
  usePID: false,
  useContext: false,
  useEvent: false,
  useTimestamp: false,
  usePadding: false,
};
const logger = new LoggerService(config);
```
### Usage

```javascript
const message = 'Hello World!';

logger.debug(message);
logger.error(message);
logger.info(message);
logger.log(message);
logger.warn(message);
```

### Examples

- [Server-Side Rendering](./exampes)

## Available Colors and Styles

| Event | Color   |
| ----- | ------- |
| debug | grey    |
| error | red     |
| info  | blue    |
| log   | green   |
| warn  | yellow  |

## People

Author - [Isidro A. Lopez G.](https://github.com/ialopezg")

## License

CustomLoggerService is under [MIT](LICENSE) license.

---

&copy; Copyright 2019-present - CustomLoggerService by [Isidro A. López G.](https://ialopezg.com/)

[npm-image]: https://img.shields.io/npm/v/custom-logger-service.svg
[npm-url]: https://npmjs.org/package/custom-logger-service
[downloads-image]: https://img.shields.io/npm/dm/custom-logger-service.svg
[downloads-url]: https://www.npmjs.com/package/custom-logger-service
[travis-image]: https://img.shields.io/travis/ialopezg/custom-logger-service/main.svg
[travis-url]: https://travis-ci.org/ialopezg/custom-logger-service
[coveralls-image]: https://img.shields.io/coveralls/ialopezg/custom-logger-service.svg?style=flat
[coveralls-url]: https://coveralls.io/r/ialopezg/custom-logger-service?branch=main
