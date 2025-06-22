// 23. Write a JavaScript function to find the difference of two arrays.  
// Test Data : 
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));  
// ["3", "10", "100"] 
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));  
// ["6"] 
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// ["3", "10", "100"] 


function flattenArray(array, shallow = false)
{
    let final = []
    array.forEach(element => {
        if(Array.isArray(element))
        {
            if(shallow)
            {
                for(let i = 0;i<element.length;i++)
                {
                    final.push(element[i])
                }
            }
            else{
                let inner = flattenArray(element)
                for(let i = 0;i<inner.length;i++)
                {
                    final.push(inner[i])
                }
            }
        }
        else{
            final.push(element)
        }
        
    });
    return final
}


function diff(array1, array2)
{
    array1 = flattenArray(array1,shallow=false)
    array2 = flattenArray(array2,shallow=false)
    let diff1 = array1.filter(val=>!array2.includes(val))
    let diff2 = array2.filter(val=>!array1.includes(val))
    let result = diff1.concat(diff2)
    return result.map(String)
}

console.log(diff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

