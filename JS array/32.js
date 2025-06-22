const array = [1,2,3,5,6,7,4]
function findno(array,n)
{
    return array.filter(items=>items===n)>0
}

console.log(findno(array,8))