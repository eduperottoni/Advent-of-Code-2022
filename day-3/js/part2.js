import readFileLines from "../../utils/readFile.js";

const data = readFileLines({filePath: '../input.txt', 
                            end: false});

const guideUpper = Array.from(Array(26)).map((_, item) => item + 65);
const guideLower = Array.from(Array(26)).map((_, item) => item + 97);

const priorities = [
    ...guideLower.map((item) => String.fromCharCode(item)),
    ...guideUpper.map((item) => String.fromCharCode(item))
]

const countRepeatedItemTypes = badgesSets => {
    let sumRepeated = 0
    for (let item of badgesSets[0]) {
        (badgesSets[1].has(item) && 
        badgesSets[2].has(item)) &&
        (sumRepeated += (priorities.indexOf(item) + 1))
    }
    return sumRepeated;
}

const dataSeparated = []

for (let i = 0; i < (data.length / 3); i++) {
    dataSeparated.push(data.slice(i*3, (i+1)*3))
}

let sumPriorities = 0

dataSeparated.forEach((threeBadges) => {
    const badges = []
    threeBadges.forEach(item => {badges.push(new Set(item))})
    sumPriorities += countRepeatedItemTypes(badges)
})

console.log(sumPriorities)