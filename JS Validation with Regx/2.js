// 2. Write a JavaScript program to check a credit card number.

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
