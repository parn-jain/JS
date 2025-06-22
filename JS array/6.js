// 6. Write a JavaScript program which accept a number as input and insert dashes 
// (-) between each two even numbers. For example if you accept 025468 the 
// output should be 0-254-6-8.
const input = 123456782
let str = ''
let cvtstr = input.toString()
// console.log(cvtstr.length)
let result = cvtstr[0]

for(let i = 1;i<cvtstr.length;i++)
{
    let prev = parseInt(cvtstr[i-1]);
    let current = parseInt(cvtstr[i]);
    if(prev%2===0 && current % 2===0)
    {
        result+='-'+cvtstr[i];
    }
    else
    {
        result+=cvtstr[i]
    }

}

console.log(result)