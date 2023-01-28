import readFileLines from "../../utils/readFile.js";

var data = readFileLines({filePath:'../input.txt',
                        end: true});

let mostCalories = 0
let elfCalories = 0

data.forEach(line => {
    if (line) {
        elfCalories += Number(line);
    } else {
        (mostCalories < elfCalories) && (mostCalories = elfCalories)
        elfCalories = 0;
    }
});

console.log(mostCalories)



