# custom-logger-service

> Custom Logger for Apps and API's

<div align="center">

 <a href="https://www.paypal.me/isidrolopezg">Buy me a ☕️<br/><img src="https://img.shields.io/badge/Donate-PayPal-green" alt="donate"></a>

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][travis-image-windows]][travis-url]
[![Build Status][travis-image-osx]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Test coverage][coveralls-image]][coveralls-url]

</div>

<p align="center">

[**Contact the developer**](mailto:me@ialopezg.com)

</p>

Contents
--------
* [Installation](#installation)<br/>
  How to include protobuf.js in your project.
* [Usage](#usage)<br />
  A brief introduction to using the toolset.
* [Examples](#examples)<br />
  A few examples to get you started.
  * [Server Side Rendering](#server-side-rendering)

## Technology Stack

1. **[NodeJS](https://nodejs.org/en/)** with **[Express.js](http://expressjs.com/)** framework
2. **[TypeScript](https://www.typescriptlang.org/)**

## Requirements

- **NodeJS** v8+
- **yarn** v1.17+

Installation
-------------

### npm

```sh
npm install custom-logger-service
```

### yarn

```sh
yarn add custom-logger-service
```

Usage
-----

1. Import the logger

```js
import { logger } from 'custom-logger-service'
```

2. Use it as usual

```js
logger.error('Console Error testing')
```

Examples
--------

### Server Side Rendering

- [Server-Side Rendering](./exampes/ssr)

## Copyright

Custom Logger Service from [ialopezg.com](https://ialopezg.com) under MIT

[npm-image]: https://img.shields.io/npm/v/custom-logger-service.svg
[npm-url]: https://npmjs.org/package/custom-logger-service
[downloads-image]: https://img.shields.io/npm/dm/custom-logger-service.svg
[downloads-url]: https://www.npmjs.com/package/custom-logger-service
[travis-image]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=linux
[travis-image-osx]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=osx
[travis-image-windows]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=windows
[travis-url]: https://travis-ci.org/ialopezg/custom-error-service
[coveralls-image]: https://img.shields.io/coveralls/ialopezg/custom-logger-service.svg?style=flat
[coveralls-url]: https://coveralls.io/r/ialopezg/custom-logger-service?branch=master
