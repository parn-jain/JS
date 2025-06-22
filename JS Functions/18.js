// 18. Write a function for searching JavaScript arrays with a binary search.  
// Note : A binary search searches by splitting an array into smaller and smaller 
// chunks until it finds the desired value. 

let array = [3,4,6,4,3,4,6]
let value = 3
function searching(array,value)
{
    array = array.sort()
    let left = 0
    let right = array.length-1
    while(left<=right)
    {
        let mid = Math.floor((left+right)/2)
        if(array[mid]===value)
        {
            return mid
        }
        else if(array[mid]<value)
        {
            left = mid+1
        }
        else
        {
            right = mid-1
        }
    }
    return -1
    
}
console.log(searching(array,value))

