// 7. Write a JavaScript function to test whether a date is a weekend.  
// Note : Use standard Saturday/Sunday definition of a weekend. 
// Test Data : 
// console.log(is_weekend('Nov 15, 2014'));  
// console.log(is_weekend('Nov 16, 2014'));  
// console.log(is_weekend('Nov 17, 2014')); 
// Output : 
// "weekend"

// function is_weekend()
// {

// }

const a = new Date('Nov 16 , 2014')
if(a.getDay()==0 || a.getDay()==6)
{
    console.log("weeked")
}
else
{
    console.log(" Not weeked")

}