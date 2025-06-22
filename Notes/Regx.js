// | Regex Symbol | Meaning                                      | Example     | Matches                             |       |                        |
// | ------------ | -------------------------------------------- | ----------- | ----------------------------------- | ----- | ---------------------- |
// | `.`          | Any character except newline                 | `a.b`       | `acb`, `a7b`, `a b`                 |       |                        |
// | `\d`         | Digit (0-9)                                  | `\d{2}`     | `12`, `09`                          |       |                        |
// | `\D`         | Non-digit                                    | `\D`        | `a`, `#`                            |       |                        |
// | `\w`         | Word character (letters, digits, underscore) | `\w`        | `a`, `5`, `_`                       |       |                        |
// | `\W`         | Non-word character                           | `\W`        | `!`, `@`, ` `                       |       |                        |
// | `\s`         | Whitespace (space, tab, newline)             | `\s`        | ` ` (space), `\t`                   |       |                        |
// | `\S`         | Non-whitespace                               | `\S`        | `a`, `1`, `!`                       |       |                        |
// | `^`          | Start of string                              | `^abc`      | Matches strings starting with `abc` |       |                        |
// | `$`          | End of string                                | `xyz$`      | Matches strings ending with `xyz`   |       |                        |
// | `[]`         | Character set / class                        | `[aeiou]`   | Any vowel letter                    |       |                        |
// | `[^]`        | Negated character set                        | `[^0-9]`    | Any character except digits         |       |                        |
// | \`           | \`                                           | OR operator | \`cat                               | dog\` | Matches `cat` or `dog` |
// | `()`         | Capture group                                | `(abc)`     | Captures `abc`                      |       |                        |
// | `(?:)`       | Non-capturing group                          | `(?:abc)`   | Groups without capture              |       |                        |
// | `*`          | 0 or more repetitions                        | `a*`        | \`\`, `a`, `aa`, `aaa`              |       |                        |
// | `+`          | 1 or more repetitions                        | `a+`        | `a`, `aa`, `aaa`                    |       |                        |
// | `?`          | 0 or 1 (optional)                            | `a?`        | \`\`, `a`                           |       |                        |
// | `{n}`        | Exactly n repetitions                        | `a{3}`      | `aaa`                               |       |                        |
// | `{n,}`       | n or more repetitions                        | `a{2,}`     | `aa`, `aaa`, `aaaa`                 |       |                        |
// | `{n,m}`      | Between n and m repetitions                  | `a{2,4}`    | `aa`, `aaa`, `aaaa`                 |       |                        |
// | `\`          | Escape special characters                    | `\.`        | Matches literal `.`                 |       |                        |

// What is \b (word boundary)?
// \b matches a position between a word character ([a-zA-Z0-9_]) and a non-word character (anything else).

// It doesn’t match a character itself, just a boundary between characters.

// In simpler terms, it ensures your regex matches whole words or tokens, not just parts inside longer strings


// const str = "abc123";
// const match = str.match(/([a-z]+)(\d+)/);
// console.log("hello")
// console.log(match);
// Output: ["abc123", "abc", "123"]


const str = "abc123";
const match = str.match(/(?:[a-z]+)(\d+)/);
console.log(match);
// Output: ["abc123", "123"]



a = "1324 2342 2343 2342"
// const reg = /^\d{4}(?: \d{4}){3}$/.test(a).
const reg1 = a.match(/\d{4}/)
const reg2 = a.match(/\d{4}/g)
const reg3 = a.matchAll(/\d{4}/g)
console.log(reg1)
console.log("break")
console.log(reg2)
console.log("break")
console.log(reg3)
console.log("break")
console.log(...reg3)