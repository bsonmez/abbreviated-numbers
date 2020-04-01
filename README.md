# Abbreviated Numbers

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

Abbreviated.get(number); //return 2K for 2000.
Abbreviated.length(number); //return 4 for 2000.
```
