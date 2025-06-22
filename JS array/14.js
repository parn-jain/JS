var arr = ['a', 'A', 2, 3, 4, 4, 5,'a'];
for(var i in arr)
{
    if(typeof arr[i]==='string')
    {
        arr[i]=arr[i].toLowerCase()
    }

}
console.log(arr)
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);  // [1, 2, 3, 4, 5]

