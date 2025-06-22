//  Write a JavaScript program to find 1st January be a Sunday between 2014 
// and 2050.  
for (let year = 2014; year <= 2050; year++) {
    const firstDay = new Date(year, 0, 1); // January is 0 in JavaScript
    if (firstDay.getDay() == 0) { // 0 represents Sunday
        console.log("1st January is a Sunday in year:", year);
    }
}
