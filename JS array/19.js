
var array1 = [1,0,2,3,4]; 
var array2 = [3,5,6,7,8,13]; 
var newa=[]

const m = Math.min(array1.length, array2.length)
for(let i = 0;i<m;i++)
{
    newa[i]=array1[i]+array2[i]
}
if (array1.length < array2.length) {
    newa = newa.concat(array2.slice(m));  // Concatenate remaining elements from array2
}
// If array2 is shorter, add remaining elements from array1 (optional, based on the requirement)
else if (array2.length < array1.length) {
    newa = newa.concat(array1.slice(m));  // Concatenate remaining elements from array1
}
console.log(newa)