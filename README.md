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
runtypes x 44,509 ops/sec ±2.60% (75 runs sampled)
io-ts x 670,215 ops/sec ±0.47% (86 runs sampled)
io-ts (using is instead of decode) x 1,215,748 ops/sec ±0.84% (80 runs sampled)
tcomb-validation x 58,005 ops/sec ±0.31% (89 runs sampled)
joi x 29,581 ops/sec ±0.55% (90 runs sampled)
ajv x 4,642,593 ops/sec ±0.49% (87 runs sampled)
```

Invalid input

```
runtypes x 23,083 ops/sec ±1.41% (82 runs sampled)
io-ts x 621,506 ops/sec ±0.45% (85 runs sampled)
io-ts (using is instead of decode) x 1,310,200 ops/sec ±0.66% (84 runs sampled)
tcomb-validation x 44,143 ops/sec ±0.50% (89 runs sampled)
joi x 12,206 ops/sec ±0.78% (87 runs sampled)
ajv x 3,806,796 ops/sec ±0.19% (88 runs sampled)
```
