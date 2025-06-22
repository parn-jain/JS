const num = 1234
console.log(num.toString().length)
len = num.toString().length
const temp=1
const final = 0
for (i = 1;i<len;i++)
    {
        temp = num%10
        num = num/10
        final = final+temp
        
}
console.log(temp)
