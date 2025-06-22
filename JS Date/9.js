// 9. Write a JavaScript function to get the last day of a month.
// Test Data :
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31

function lastDay(year, month)
{
        const a = new Date(year, month, 0).getDate()
    console.log(a)
}

lastDay(2024, 4)