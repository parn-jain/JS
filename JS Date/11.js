// 11. Write a JavaScript function to get the maximum date from an array of dates.
// Test Data :
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"

function max_date(array)
{
    array.sort((a,b)=>new Date(a)-new Date(b))
    console.log(array[array.length-1])
}

array = ['2015/01/01', '2016/01/01', '2011/01/01']
max_date(array)
