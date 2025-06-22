function array_range(a,b)
{
    var array = []
    if(a<b)
    {

        for (let i = a;i<=b;i++)
        {
            array.push(i)
        }
    }
    else if (a>b)
    {
        for(let j = a;j>=b;j--)
        {
            array.push(j)
        }
    }
    return array
}
console.log(array_range(4,1))