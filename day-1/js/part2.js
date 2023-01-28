import readFileLines from "../../utils/readFile.js";

var data = readFileLines({filePath: '../input.txt', 
                        end: true});

let elfCalories = 0
let topThree = [0, 0, 0]

const adjustArray = (startPosition, arrayLenght) => {
    if (!(startPosition + 1 == arrayLenght)){
        for (let i = arrayLenght - 1; i >= startPosition + 1; i--) {
            topThree[i] = topThree[i - 1];
        }
    }
}

data.forEach( line => {
    if (line) {
        elfCalories += Number(line);
    } else {
        for(let j = 0; j < 3; j ++) {
            if (elfCalories > topThree[j]) {
                adjustArray(j, topThree.length)
                topThree[j] = elfCalories
                break
            }
        }
        elfCalories = 0;
    }
});

console.log(
    topThree.reduce((sum, current) => sum + current, 0))



