// // 4. Write a JavaScript function to get the last element of an array. Passing a 
// // parameter 'n' will return the last 'n' elements of the array.  
// // Test Data :



function lastElement(array,n)
{
    if (n==null)
    {
        n=0
        return array[0]
    }
    else{
        return array.slice(n)
    }
}

const array = [1,2,3,4]
const n = 9
console.log(lastElement(array,n))