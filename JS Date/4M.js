const d1 = new Date("10/11/2009");
const d2 = new Date("11/13/2014");
const as = d1.toDateString({ month: 'long' })

console.log(as)
console.log(as.split(' ')[1])
console.log(d2.toDateString());

const options = {month:'long'}
const formator = new Intl.DateTimeFormat('en-US',options)
console.log(formator.format(d1))


// Output: Sat Oct 11 2025 00:00:00 GMT+0530 (India Standard Time)
