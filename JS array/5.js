// // 5. Write a simple JavaScript program to join all elements of the following array 
// // into a string. 
// // Sample array : myColor = ["Red", "Green", "White", "Black"]; 
// // Expected Output :  
// // "Red,Green,White,Black" 
// // "Red,Green,White,Black" 
// // "Red+Green+White+Black"

// const myColor = ["Red", "Green", "White", "Black"]
// let stringFinal=''
// for(let i = 0;i<myColor.length;i++)
// {
//     stringFinal=stringFinal+myColor[i]+','
// }
// console.log(stringFinal)


const myColor = ["Red", "Green", "White", "Black"];
const stringFinal = myColor.join(',');

console.log(stringFinal);