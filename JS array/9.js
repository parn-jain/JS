// 9. Write a JavaScript program which accept a string as input and swap the case 
// of each character. For example if you input 'The Quick Brown Fox' the output 
// should be 'tHE qUICK bROWN fOX'. 

function togglecase(str)
{
    let toggled = ''
    for (let char of str)
    {
        if (char===char.toUpperCase())
        {
            toggled += char.toLowerCase()
        }
        else{
            toggled+=char.toUpperCase()
        }
    }
    return toggled;
}

console.log(togglecase("Hello World"))