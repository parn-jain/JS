// 34. Write a JavaScript function to get nth largest element from an unsorted 
// array.  
// Test Data : 
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 
// 89 /

var array = [ 43, 56, 23, 89, 88, 90, 99, 652]
n = 4
array.sort((a,b)=>a-b)
console.log(array[array.length-n])