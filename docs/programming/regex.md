# Regex (Regular Expression) Notes

Regular expression is used for pattern matching or string matching.

```regex
[abc]    // a,b or c
[^abc]   // any character except a, b or c
[a-z]    // a to z
[A-Z]    // A to Z 
[a-zA-Z] // a to z and A-Z 
[0-9]    // 0 to 9
```

### Quantifiers

Tells the computer about repetition in regular expression.

```regex
[ ]?       // Occurs 0 or 1 times
[ ]+       // Occurs 1 or more times
[ ]*       // Occurs 0 or more times
[ ]{n}     // Occurs n times
[ ]{n,}    // Occurs n or more times
[ ]{x,y}   // Occurs x or more times but less than y times
```

### Metacharacters

```regex
\d         // [0-9]
\D         // [^0-9]
\w         // [a-zA-Z_0-9]
\W         // [^\w]
```

**Escape character (\\)**

Escape character indicates the following character to be considered as a search character. (+, -, ?, *)
