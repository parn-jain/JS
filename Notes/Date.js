// fromate 1
// Date(year, month, day, hour, minute, second, ms)
var date = new Date(2025, 1, 1, 4, 2, 2, 3)
// Passing 0 as the day sets the date to the last day of the previous month.
console.log(date)

// format 2
var date = new Date("2025-01-02T12:00:00Z")   //T for time and Z for UTC time
console.log(date)
var date = new Date()   //T for time and Z for UTC time

const year = date.getFullYear()
const day = date.getDate()
const hour = date.getHours()
const month = date.getMonth()
const minutes = date.getMinutes()
const dayonweek = date.getDay()
const time = date.getTime()


// replace get with set to set the date in the instance of Date obj


console.log(year)
console.log(day)
console.log(hour)
console.log(month)
console.log(minutes)
console.log("time")
console.log(time)


// Date arathamatics
const d = new Date();
d.setDate(d.getDate() + 5); // adds 5 days
console.log(d)

// compare dates
const d1 = new Date("2025-06-20");
const d2 = new Date("2025-06-21");
console.log(d1 < d2);

// Get Time Difference
const diff = d2 - d1; 
const daysnew = diff / (1000 * 60 * 60 * 24);

console.log(daysnew)
// Doubt





// Formatin of Dates
const dnew = new Date();
console.log(dnew.toDateString())
console.log(dnew.toTimeString())
// console.log(dnew)


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour12: true ,timeZoneName: 'long'};
const formatter = new Intl.DateTimeFormat('en-US', options);
console.log(formatter.format(date)); 
// e.g., "samedi 21 juin 2025"




// In JavaScript, two different Date objects (even with the same value) are different object references.
// see Question 5
// What does .getTime() do?
// It returns the number of milliseconds since the Unix Epoch (1970-01-01T00:00:00Z), so you can reliably compare exact points in time.
// const sd = new Date("11/12/2024").toString()   //complet date and time ,  month and week will be name of month
const sd = new Date("11/12/2024").toDateString() // only date not time
// const sd = new Date("11/12/2024")
console.log(sd)
// console.log(sd)


// this is also valid
// const a = new Date('Nov 16 , 2014').toString()
// const a = new Date('16 Nov 2024').toString()
// const a = new Date('16,Nov,2024').toString()
// const a = new Date('16/11/2024').toString()         //Invalid format , month pehle aayege
const a = new Date('11/16/2024').toString()         //Invalid format , month pehle aayege
console.log(a)
