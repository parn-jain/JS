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




// const str = "abc123";
// const match = str.match(/([a-z]+)(\d+)/);
// console.log("hello")
// console.log(match);
// Output: ["abc123", "abc", "123"]


const str = "abc123";
const match = str.match(/(?:[a-z]+)(\d+)/);
console.log(match);
// Output: ["abc123", "123"]
