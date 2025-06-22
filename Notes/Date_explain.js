let a = new Date()

// console.log(a.getFullYear())
// console.log(a.getDay())
// console.log(a.getDate())
// console.log(a.setFullYear(2026)/(1000*60*60*24*365))
// console.log(a.toString())


const options = {month : 'long',year : 'numeric', hour :'numeric', hour12: true,timeZoneName: 'long'}
const formatter = new Intl.DateTimeFormat('en-US', options);
a = formatter.format(a).toString()
console.log(a)
console.log(typeof(a))
// console.log("helo")
// console.log(a.toString())


// console.log(typeof(a))
// let b = new Date("Nov 23 2034")
// let b = new Date("2024/11/10")
// b = b.toString()
// console.log(b)/
