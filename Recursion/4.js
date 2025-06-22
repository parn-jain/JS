// 4. Write a JavaScript program to compute the sum of an array of integers.  
// Example : 
var array = [1, 2, 3, 4, 5, 6] 

function sum(array,i=0)
{
    if(i==array.length)
    {
        return 0
    }
    return array[i] + sum(array, i + 1);

}

console.log(sum(array))