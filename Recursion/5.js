// 5. Write a JavaScript program to compute the exponent of a number.  
// Note : The exponent of a number says how many times the base number is used 
// as a factor. 
// = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exp(base,power)
{
    if(power==0){
        return 1
    }
    return base*exp(base,power-1)
}

console.log(exp(8,2))