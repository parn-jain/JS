const now = new Date()
const today = now.toLocaleDateString()
console.log("Today:", today);

const currectyear = now.getFullYear()
const christmas = new Date(currectyear,11,25)
const diffInMs = christmas - now
const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
console.log(diffInDays)

