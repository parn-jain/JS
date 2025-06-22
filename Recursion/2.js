// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two 
// positive numbers. 

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Example usage:
console.log(gcd(48, 18));  // Output: 6
console.log(gcd(56, 98));  // Output: 14
