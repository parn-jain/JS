// 2. Write a JavaScript function that checks whether a passed string is palindrome 
// or not?  
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam or nurses run.


// ABA
// ABBA
function palindrome(str)
{
    let i = 0
    let j = str.length-1
    while(i<j)
    {
        console.log(i+" "+j)
        if(str[i]!=str[j])
        {
            return false
        }
        i++
        j--
    }
    return true
}
console.log(palindrome('parn'))