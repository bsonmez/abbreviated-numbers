# Abbreviated Numbers

![Build Status](https://travis-ci.com/bsonmez/abbreviated-numbers.svg?branch=master)
![Stars](https://img.shields.io/github/stars/bsonmez/abbreviated-numbers)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bsonmez/abbreviated-numbers/issues)
![GitHub release](https://img.shields.io/github/tag/bsonmez/abbreviated-numbers.svg)
![GitHub license](https://img.shields.io/github/license/bsonmez/abbreviated-numbers.svg)

It's a very simple and tiny tool converts numbers more human-readable abbreviated numbers.

## Installation

```npm
npm i abbreviated-numbers
```

OR

```yarn
yarn add abbreviated-numbers
```

## Usage

```javascript
const { Abbreviated } = require('abbreviated-numbers');

Abbreviated.get(number); //returns 2K for 2000.
Abbreviated.length(number); //returns 4 for 2000.
```
