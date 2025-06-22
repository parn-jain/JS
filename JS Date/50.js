// Write a JavaScript function to get the week start date.

const a = new Date("06/22/2025")
console.log(a.getDay())
if (a.getDay()!=1)
{
    var c = a.getDate()-a.getDay()-1
    a.setDate(c)
    console.log(c)
    console.log(a.toString())
}
