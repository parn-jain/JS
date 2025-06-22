// 2. Write a JavaScript program to check a credit card number.

a = "1324 2342 2343 2342"
const reg = /^\d{4}(?: \d{4}){3}$/.test(a)
console.log(reg)