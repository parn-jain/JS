function compare_dates(c,d)
{
    const a = new Date(c)
    const b = new Date(d)
    if(a.getTime()===b.getTime())
    {
        return `${a}=${b}`
    }
    else if(a.getTime()>b.getTime())
    {
        return `${a}>${b}`
    }
    else if(a.getTime()<b.getTime())
    {
        return `${a}<${b}`
    }
}


// therefore we are using time to cpmare
// console.log(compare_dates('11/11/2024 00:01','11/11/2024 00:34'))
// var c = "11/11/2025"
// const a = new Date(c)
// const b = new Date(c)
// console.log(a.getTime())
