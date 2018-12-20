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
runtypes x 23,342 ops/sec ±0.70% (68 runs sampled)
io-ts x 485,114 ops/sec ±2.66% (87 runs sampled)
io-ts (using is instead of decode) x 1,297,460 ops/sec ±0.59% (85 runs sampled)
tcomb-validation x 56,495 ops/sec ±0.51% (88 runs sampled)
joi x 40,886 ops/sec ±1.06% (88 runs sampled)
ajv x 6,116,998 ops/sec ±0.40% (86 runs sampled)
```

Invalid input

```
runtypes x 8,636 ops/sec ±1.10% (73 runs sampled)
io-ts x 451,635 ops/sec ±2.31% (88 runs sampled)
io-ts (using is instead of decode) x 1,386,287 ops/sec ±0.56% (88 runs sampled)
tcomb-validation x 44,164 ops/sec ±0.49% (88 runs sampled)
joi x 13,485 ops/sec ±1.81% (85 runs sampled)
ajv x 4,458,089 ops/sec ±0.31% (91 runs sampled)
```
