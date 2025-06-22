
console.log(Object.getOwnPropertyNames(Array))
console.log(Object.getOwnPropertyNames(Array.prototype))
var a = [1,2,3,5]
//a.prototype.push(7)    // incorrect , since, prototype is for functions, a is not a functino , it is array object
// (use case later)
console.log(a)