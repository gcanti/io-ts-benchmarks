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
v14.16.0
```

Valid input

```
runtypes x 290,932 ops/sec ±1.09% (87 runs sampled)
io-ts x 782,204 ops/sec ±0.44% (89 runs sampled)
io-ts (using is instead of decode) x 2,499,180 ops/sec ±0.66% (88 runs sampled)
tcomb-validation x 75,840 ops/sec ±1.12% (84 runs sampled)
joi x 73,111 ops/sec ±1.28% (84 runs sampled)
ajv x 9,552,962 ops/sec ±1.22% (88 runs sampled)
```

Invalid input

```
runtypes x 289,893 ops/sec ±0.67% (89 runs sampled)
io-ts x 690,742 ops/sec ±0.92% (90 runs sampled)
io-ts (using is instead of decode) x 2,566,138 ops/sec ±0.93% (89 runs sampled)
tcomb-validation x 48,201 ops/sec ±0.54% (86 runs sampled)
joi x 49,055 ops/sec ±0.70% (90 runs sampled)
ajv x 7,394,272 ops/sec ±0.85% (91 runs sampled)
```
