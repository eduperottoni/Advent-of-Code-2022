import readFileLines from "../../utils/readFile.js";

var data = readFileLines('input.txt');

let mostCalories = 0
let elfCalories = 0

for (let i = 0; i < data.length; i++) {
    if (data[i]) {
        elfCalories += Number(data[i]);
    } else {
        if (mostCalories < elfCalories) {
            mostCalories = elfCalories
        }
        elfCalories = 0;
    }
}

console.log(mostCalories)



