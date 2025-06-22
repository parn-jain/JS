function myFunction() {
    return "This is myFunction";
}

function getFunctionName(func) {
    return func.name;
}

console.log(getFunctionName(myFunction));  // Output: "myFunction"
