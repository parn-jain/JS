//  Write a JavaScript program to get the current date.  
// Expected Output :  
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const now = new Date()
const day = String(now.getDate()).padStart(2, '0')
// padStart(targetLength, padString)
// It pads the beginning of a string with another string (padString) until the final string reaches the targetLength.
const month = String(now.getMonth() + 1).padStart(2, '0')
const year = now.getFullYear()

//mm-dd-yyyy
const date1 = `${month}-${day}-${year}`
    

// mm/dd/yyyy
const date2 = `${month}/${day}/${year}`

// dd-mm-yyyy
const date3 = `${day}-${month}-${year}`

// dd/mm/yyyy
const date4= `${day}/${month}/${year}`


console.log(date1)
console.log(date2)
console.log(date3)
console.log(date4)


