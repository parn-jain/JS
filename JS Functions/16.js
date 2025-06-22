// 16. Write a JavaScript function to extract unique characters from a string.  
// Example string : "thequickbrownfoxjumpsoverthelazydog" 
// Expected Output : "thequickbrownfxjmpsvlazydg" \

let a = "thequickbrownfoxjumpsoverthelazydog"
a = a.split('')
console.log(a)
let c = new Set(a)
console.log(c)
let str = [...c].join('')
console.log(str)