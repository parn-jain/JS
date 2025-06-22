// 7. Write a JavaScript function that accepts a string as a parameter and counts 
// the number of vowels within the string.  
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do 
// not count 'y' as vowel here.  
// Example string : 'The quick brown fox'  
// Expected Output : 5

const v = ['a','e','i','o','u']
let count = 0
let a = "The quick brown fox"
let c= a.split(' ').join('')
for (let i = 0;i<c.length;i++)
{
    if(v.includes(c[i]))
    {
        count++
    }
}
console.log(count)

