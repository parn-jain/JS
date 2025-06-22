function leapyear(year)
{
    if (isNaN(year) || !Number.isInteger(year)) {
        return "Error: Please enter a valid integer year.";
    }

    if(year%4==0 && !year%100==0 || year%400==0)
    {
        return true
    }
    else
    {
        return false
    }
}


console.log(leapyear(2024))