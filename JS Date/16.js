function days_passed(date)
{
    const a = new Date(date)
    const year = a.getFullYear()
    const first = new Date(year, 0, 1)
    var differ = (a-first)/(60*60*24*1000)
    console.log(differ)
}


days_passed("2025 Jan 02")


// parn ka conform hay ? uska kahi cognizant me ho gaya tha na ?