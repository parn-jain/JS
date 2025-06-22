// 22. Write a JavaScript program to compute the union of two arrays.  
// Sample Data : 
// console.log(union([1, 2, 3], [100, 2, 1, 10])); 
// [1, 2, 3, 10, 100] 
const array1 = [1, 2, 3]
const array2 = [100, 2, 1, 10]

var newarr = [...array1,...array2]
const newset = new Set(newarr)
console.log(newset)

