# Prime Numbers

## Primality Test

**O(n) Complexity**

```cpp
bool isPrime(int n) {
  if(n <=1) return false;
  for(int i=2; i<n;i++) {
    if(n%i==0) return false;
  }
  return true;
}
```

## Prime Factorization

```cpp
int f[100], expo[100], len = 0;

void primeFact(int n) {
  // Edge case: n->1
  if (n == 1) {
    f[len] = 2;
    expo[len] = 0;
    return;
  }

  int d = 2;
  while (1LL * d * d <= n && n > 1) {
    int k = 0;
    while (n % d == 0) {
      k++;
      n /= d;
    }
    if (k > 0) {
      f[len] = d;
      expo[len] = k;
      len++;
    }
    d++;
  }
  if (n > 1) {
    f[len] = n;
    expo[len] = 1;
    len++;
  }
}
```

## Prime Generator

**Sieve of Eratosthenes**

```cpp
const int Nmax = 100001;
bool isPrime[Nmax];
void sieveOfEratosthenes(int n) {
  for(int i=2; i<=n; i++) {
    isPrime[i] = true;
  }
  for(int i=2; i<= n/2; i++) {
    if(isPrime[i] == true) {
      for(int j=i*2; j<=n; j+=i) {
        isPrime[j] = false;
      }
    }
  }
}
```
