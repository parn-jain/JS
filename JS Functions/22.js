let a = 'w3resource.com'
function ct(str,f)
{
    let count = 0

    str = str.split('')
    for(var i in str)
    {
        if(str[i]===f)
        {
            count++
        }
    }
    return count
        
}

console.log(ct('w3resource.com','o'))
