# C++ STL Vector

### Special Boolean Vector

For bitmasking, the special type can be used.

```cpp
vector<bool> mask;
mask.flip();
```

To fill element of a vector with a specific value `fill()` function is used.

fill function takes three arguments starting point, ending point, value.

```cpp
vector<int> v(10);
fill(v.begin(), v.end(), 1);
```

Here `v(10)` <- 10 is the length.


