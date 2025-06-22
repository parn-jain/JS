let i = 0
let j = 0
let array = []
let inner = []
for(i=0;i<4;i++)
{
    for(j=0;j<5;j++)
    {
        inner.push(1)
    }
    array.push(inner)
    inner = []
}

console.log(array)