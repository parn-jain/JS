// 14. Write a JavaScript function to convert an amount to coins.  
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.  
// Output : 25, 10, 10, 1

function amountToC(amount, coins) {
    let result = [];
    coins = coins.sort((a, b) => b - a); 

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
        }
    }

    return result;
}

// Test
console.log(amountToC(46, [25, 10, 5, 2, 1])); 
