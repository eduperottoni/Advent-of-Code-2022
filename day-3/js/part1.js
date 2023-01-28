import readFileLines from "../../utils/readFile.js";

const data = readFileLines({filePath: '../input.txt', 
                            end: false});

const guideUpper = Array.from(Array(26)).map((_, item) => item + 65);
const guideLower = Array.from(Array(26)).map((_, item) => item + 97);

const priorities = [
    ...guideLower.map((item) => String.fromCharCode(item)),
    ...guideUpper.map((item) => String.fromCharCode(item))
]

const countRepeatedItemTypes = (rucksack) => {
    let sumRuckPriorities = 0
    const middleRuckSackLenght = rucksack.length / 2
    let [compart1, compart2] = [
        new Set(rucksack.slice(0,middleRuckSackLenght)), 
        new Set(rucksack.slice(middleRuckSackLenght, rucksack.length))
    ];
    for (let item of compart1) {
        compart2.has(item) && (sumRuckPriorities += (priorities.indexOf(item) + 1))
    }
    return sumRuckPriorities;
}


let sumPriorities = 0

data.forEach((item) => {
    sumPriorities += countRepeatedItemTypes(item)
});

console.log(sumPriorities)