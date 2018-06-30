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
v10.1.0
```

Valid input

```
runtypes x 21,970 ops/sec ±1.42% (67 runs sampled)
io-ts x 561,110 ops/sec ±0.60% (88 runs sampled)
io-ts (using is instead of decode) x 1,730,509 ops/sec ±0.60% (87 runs sampled)
tcomb-validation x 60,526 ops/sec ±0.49% (90 runs sampled)
joi x 38,406 ops/sec ±1.35% (85 runs sampled)
ajv x 5,845,805 ops/sec ±0.61% (90 runs sampled)
```

Invalid input

```
runtypes x 8,035 ops/sec ±1.76% (68 runs sampled)
io-ts x 486,146 ops/sec ±2.55% (85 runs sampled)
io-ts (using is instead of decode) x 1,714,454 ops/sec ±1.94% (85 runs sampled)
tcomb-validation x 41,472 ops/sec ±0.74% (87 runs sampled)
joi x 13,108 ops/sec ±0.88% (88 runs sampled)
ajv x 4,235,859 ops/sec ±3.41% (88 runs sampled)
```
