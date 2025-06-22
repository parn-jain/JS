function remove_array_element(array,n)
{
    let result = array.filter(items=>items!==n)
    return result
}
let array = [1, 2, 3, 4, 5, 2, 6];
console.log(remove_array_element(array,5))