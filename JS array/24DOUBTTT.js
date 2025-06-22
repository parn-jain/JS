const arr= [NaN, 0, 15, false, -22, '',undefined, 47, null] 
var arrnew = []
for(var i in arr)
{
    if(arr[i])
    {
        arrnew.push(arr[i])
    }
}
// arrnew.push(null)

console.log(arrnew)
