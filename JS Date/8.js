// 8. Write a JavaScript function to get difference between two dates in days.
// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28

// function date_diff_indaya(c,d)
// {
//     const a = new Date(c)
//     const b = new Date(d)
//     var diff = (a-b)   
// }
c ="11/11/2024"
d ="11/9/2024"

const a = new Date(c)
const b = new Date(d)
var diff = (a-b)/(1000*60*60*24)
console.log(diff)   