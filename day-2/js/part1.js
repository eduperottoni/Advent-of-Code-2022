import readFileLines from "../../utils/readFile.js";

var data = readFileLines('input.txt');

let sumRounds = 0

const opponentShapes = ['A', 'B', 'C']
const myShapes = ['X', 'Y', 'Z']

for (let i = 0; i < data.length - 1; i++) {
    let opponentPlay = opponentShapes.indexOf(data[i][0]) + 1
    let myPlay = myShapes.indexOf(data[i][2]) + 1
    if (opponentPlay === myPlay) {
        sumRounds += (3 + myPlay)
    } else {
        switch (opponentPlay) {
            case 1:
                sumRounds += (myPlay === 2 ?  (6 + myPlay) : myPlay)
                break;
            case 2:
                sumRounds += (myPlay === 1 ?  myPlay : (6 + myPlay))
                break;
            case 3:
                sumRounds += (myPlay === 1 ? (6 + myPlay) : myPlay)
                break;
        }
    }
}

console.log(sumRounds)