import readFileLines from "../../utils/readFile.js";

var data = readFileLines('input.txt');

let elfCalories = 0
let topThree = [0, 0, 0]

const adjustArray = (startPosition, arrayLenght) => {
    if (!(startPosition + 1 == arrayLenght)){
        for (let i = arrayLenght - 1; i >= startPosition + 1; i--) {
            topThree[i] = topThree[i - 1];
        }
    }
}
for (let i = 0; i < data.length; i++) {
    if (data[i]) {
        elfCalories += Number(data[i]);
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
}

console.log(topThree)
console.log(
    topThree.reduce((sum, current) => sum + current, 0))



