
function curday(a)
{

    const n = new Date()
    const year = n.getFullYear()
    const month = String(n.getMonth()+1).padStart(2,'0')
    const date = String(n.getDate()).padStart(2,'0')
    const ans = `${month}${a}${date}${a}${year}`
    return ans
}

console.log(curday("-"))
