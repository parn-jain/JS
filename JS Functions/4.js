// 4. Write a JavaScript function that returns a passed string with letters in 
// alphabetical order. 
// Example string : 'webmaster'  
// Expected Output : 'abeemrstw' 
// Assume punctuation and numbers symbols are not included in the passed string. 


// var a = "webmaster"
// a.sort((a,b)=>a-b)
// console.log(a)


var a = "webmaster";
var sorted = a.split('').sort().join('');
console.log(sorted); // Output: "abeemrstw"


// let arr = [3, 1, 2];
