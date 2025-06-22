// let pattern = /\b\w*\W*\b/
let pattern = /^\s+|\s+$/g

let a= "  dfdf65#%@4werf  "
let matching = a.replace(pattern,"")
console.log(matching)