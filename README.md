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
runtypes x 44,792 ops/sec ±3.70% (76 runs sampled)
io-ts x 347,162 ops/sec ±0.37% (89 runs sampled)
io-ts (using is instead of decode) x 1,009,447 ops/sec ±0.96% (86 runs sampled)
tcomb-validation x 58,689 ops/sec ±0.43% (90 runs sampled)
joi x 28,359 ops/sec ±0.85% (85 runs sampled)
ajv x 4,554,632 ops/sec ±0.38% (89 runs sampled)
```

Invalid input

```
runtypes x 22,734 ops/sec ±1.32% (78 runs sampled)
io-ts x 303,149 ops/sec ±0.43% (83 runs sampled)
io-ts (using is instead of decode) x 1,075,637 ops/sec ±0.60% (84 runs sampled)
tcomb-validation x 76,872 ops/sec ±0.73% (85 runs sampled)
joi x 11,273 ops/sec ±0.75% (84 runs sampled)
ajv x 3,769,209 ops/sec ±0.24% (90 runs sampled)
```
