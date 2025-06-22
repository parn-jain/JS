//  Write a JavaScript program where the program takes a random integer 
// between 1 to 10, the user is then prompted to input a guess number. If the user 
// input matches with guess number, the program will display a message "Good 
// Work" otherwise display a message "Not matched". 

const randomNumber = Math.floor(Math.random() * 10) + 1;
// const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
const userGuess = 4

if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
} else if (userGuess === randomNumber) {
    alert("Good Work!");
} else {
    alert("Not matched. The correct number was " + randomNumber);
}
// 0 0.9