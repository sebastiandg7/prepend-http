

# Prepend HTTP

(Forked from [sindresorhus/prepend-http](https://github.com/sindresorhus/prepend-http))

## Install

`npm install @sebastiandg7/prepend-http`

or

`yarn add @sebastiandg7/prepend-http`

or

`pnpm install @sebastiandg7/prepend-http`


## Usage

```typescript
import { prependHttp } from '@sebastiandg7/prepend-http';

prependHttp('sindresorhus.com');
//=> 'https://sindresorhus.com'

prependHttp('localhost', { https: false });
//=> 'http://localhost'

prependHttp('https://sindresorhus.com');
//=> 'https://sindresorhus.com'
```
