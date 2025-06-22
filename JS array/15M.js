let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let pos = i + 1;

    // Handle 11th, 12th, 13th as special cases
    let suffix;
    if (pos % 100 >= 11 && pos % 100 <= 13) {
        suffix = o[0]; // "th"
    } else {
        // Use st, nd, rd for 1, 2, 3, otherwise "th"
        switch (pos % 10) {
            case 1: suffix = o[1]; break; // "st"
            case 2: suffix = o[2]; break; // "nd"
            case 3: suffix = o[3]; break; // "rd"
            default: suffix = o[0];       // "th"
        }
    }

    console.log(`${pos}${suffix} choice is ${color[i]}`);
}
