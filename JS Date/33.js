// 33. Write a JavaScript function to get 12-hour format of an hour with leading 
// zeros.
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));
// "12"

// option = {hour: 'numeric',hour12:true}
// const d = new Date()
// var formatter = new Intl.DateTimeFormat('en-US',option)
// console.log(formatter.format(d))



// BUT FOR LEADING zeros
const x = new Date()
var ans = x.getHours()
if(ans>12)
{
    ans = ans%12
}
else if(ans===0)
{
    ans = 12
}
console.log(ans.toString().padStart(2,'0'))

