// to check for array
console.log(Array.isArray([1,2,3]))

// splice.
// 1. Remove elements
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); 
console.log(fruits); // ["apple", "cherry"]


// 2. Add elements
let numbers = [1, 4, 5];
numbers.splice(1, 0, 2, 3);
console.log(numbers); // [1, 2, 3, 4, 5]

// 3. Replace elements
let colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow");
console.log(colors); // ["red", "yellow", "green"]


// 4. Remove all elements from a point
let arr = [1, 2, 3, 4, 5];
arr.splice(2); 
console.log(arr); // [1, 2]



// NaN is not equal to itself (NaN !== NaN in JavaScript). So, this comparison will always return false, and you will never remove NaN values.



// filter() creates a new array with all the elements that pass the test (i.e., those that are not equal to 2 in this case).
// Q:31




    // let diff1 = array1.filter(val=>!array2.includes(val))
    // let diff2 = array2.filter(val=>!array1.includes(val))