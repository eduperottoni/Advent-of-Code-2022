import readFileLines from "../../utils/readFile.js";

var data = readFileLines('input.txt');

let sumRounds = 0

const opponentShapes = ['A', 'B', 'C']
const roundResults = ['X', 'Y', 'Z']

for (let i = 0; i < data.length - 1; i++) {
    const opponentPlay = data[i][0];
    const roundResult = data[i][2];
    switch (roundResult) {
        case 'Y':
            sumRounds += (opponentShapes.indexOf(opponentPlay) + 1)
            break;
        case 'X':
            if (opponentPlay === 'A') sumRounds += 3
            else if (opponentPlay === 'B') sumRounds += 1
            else sumRounds += 2
            break;
        case 'Z':
            if (opponentPlay === 'A') sumRounds += 2
            else if (opponentPlay === 'B') sumRounds += 3
            else sumRounds += 1
            break;
    }
    sumRounds += (roundResults.indexOf(roundResult) * 3)
}

console.log(sumRounds)