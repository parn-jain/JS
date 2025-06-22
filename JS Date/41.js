function addyear(date,add)
{
    var a = new Date(date)
    var b = a.getFullYear()
    b = b+add
    a.setFullYear(b)
    console.log(a.toString())

}

addyear("11/11/2023", 10)