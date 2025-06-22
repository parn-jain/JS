function flattenArray(array, shallow = false) {
    let result = [];

    array.forEach(ele => {
        if (Array.isArray(ele)) {
            if (shallow) {
                for (let i = 0; i < ele.length; i++) {
                    result.push(ele[i]);
                }
            } else {
                let inner = flattenArray(ele);
                for (let i = 0; i < inner.length; i++) {
                    result.push(inner[i]);
                }
            }
        } else {
            result.push(ele);
        }
    });

    return result;
}

console.log(flattenArray([1, [2], [3, [[4]]],[5,6]], shallow = true))
