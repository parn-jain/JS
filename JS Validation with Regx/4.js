// 4. Write a JavaScript program to search a date within a string.  

pattern= /(0?\d+[/-]){3}/
// pattern_more_adv = / \b 0?[0-9]|[12][0-9]|[3][01][/-] \b/
const pattern_more_adv = /\b(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[0-2])[\/\-](\d{4})\b/g;
let a= ' 12/12/1233/ '
let b= ' hello 12/12/1233 hi '
console.log(pattern.test(a))
console.log(pattern_more_adv.test(b))