function getDaysInMonth(year, month)
{
    const ans = new Date(year,month+1,0).getDate()
    // Passing 0 as the day sets the date to the last day of the PREVIOUS month.
    return ans
}

console.log(getDaysInMonth(2025,1))