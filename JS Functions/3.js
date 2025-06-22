function sol(str)
{
    let result = []
    for(let i = 0;i<str.length;i++)
    {
        let comb = ''
        for(let j = i; j<str.length;j++)
        {
            comb+=str[j]
            result.push(comb)
        }
    }
    return result
}

console.log(sol('dog'))
