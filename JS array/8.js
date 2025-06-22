var dict = {}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
for(var i of arr1)
{
    if(dict[i])
    {
        dict[i]+=1
    }
    else{
        dict[i]=1
    }
}
console.log(dict)

let max_value = null
let max_key = -Infinity

for(var key in dict)
{
    if(dict[key]>max_value)
    {
        max_value = dict[key]
        max_key = key
    }
}

console.log(max_key)
