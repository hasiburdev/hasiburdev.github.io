# Modular Arithmetic

### Fast Modular Exponentiation



Recursive Approach

```cpp
int fastModularExpo(int a, long long n, int MOD) {
  // Base case
  if (n == 0)
    return 1;
  if (n % 2 == 0)
    return fastModularExpo((1LL * a * a) % MOD, n / 2, MOD);
  return (1LL * a * fastModularExpo(a, n - 1, MOD)) % MOD;
}
```
