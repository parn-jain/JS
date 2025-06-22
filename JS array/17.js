const array = [1,2,3,456,65,4,4,67]

function suffleArray(arr)
{
    for (let i= arr.length - 1;i>=0;i--)
    {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
      return arr;

}

console.log("Shuffled Array:", suffleArray(array));
