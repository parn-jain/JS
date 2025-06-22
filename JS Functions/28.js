function greet(name)
{
    console.log(`hello ${name}`)   
}

function bye(name)
{
    console.log(`bye ${name}`)
}

function userinp(todo, name)
{
    return todo(name)
}

userinp(greet, "Parn")
userinp(bye, "Parn")