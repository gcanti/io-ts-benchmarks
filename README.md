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

```
runtypes x 44,724 ops/sec ±3.29% (74 runs sampled)
io-ts x 344,973 ops/sec ±0.34% (90 runs sampled)
tcomb-validation x 48,552 ops/sec ±0.73% (88 runs sampled)
joi x 28,794 ops/sec ±0.51% (88 runs sampled)
```
