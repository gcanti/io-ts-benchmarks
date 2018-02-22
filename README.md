# Setup

```sh
git clone https://github.com/gcanti/io-ts-benchmarks.git
cd io-ts-benchmarks
npm i
npm run build
npm start
```

# Results

## space-object

```
node --version
v8.9.3
```

Valid input

```
runtypes x 45,959 ops/sec ±2.79% (78 runs sampled)
io-ts x 586,151 ops/sec ±0.60% (89 runs sampled)
io-ts (using is instead of decode) x 1,003,559 ops/sec ±0.75% (84 runs sampled)
tcomb-validation x 58,899 ops/sec ±0.40% (86 runs sampled)
joi x 28,930 ops/sec ±0.41% (89 runs sampled)
ajv x 4,643,451 ops/sec ±0.34% (87 runs sampled)
```

Invalid input

```
runtypes x 22,534 ops/sec ±1.36% (81 runs sampled)
io-ts x 557,433 ops/sec ±0.36% (90 runs sampled)
io-ts (using is instead of decode) x 1,073,774 ops/sec ±0.82% (83 runs sampled)
tcomb-validation x 43,722 ops/sec ±0.34% (90 runs sampled)
joi x 12,010 ops/sec ±0.96% (87 runs sampled)
ajv x 3,771,462 ops/sec ±0.29% (88 runs sampled)
```
