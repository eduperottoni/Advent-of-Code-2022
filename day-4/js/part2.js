import readFileLines from "../../utils/readFile.js";

var data = readFileLines({filePath:'../input.txt',
                        end: false});

const checkOverlaps = pairs => {
    const ranges = pairs.map( item => {
        return item.split('-').map( item => Number(item))
    });

    let [range1, range2] = ranges.map( item => {
        const range = []
        for (let i = item[0]; i <= item[1]; i++) {
            range.push(i)
        }
        return range
    })

    let sumOverlapsInRanges = 0
    range1.forEach( item => {
        range2.includes(item) && (sumOverlapsInRanges += 1)
    })

    console.log(sumOverlapsInRanges)
    return sumOverlapsInRanges
}

let sumOverlaps = 0

data.forEach( line => {
    const pairs = line.split(',')
    checkOverlaps(pairs) && sumOverlaps++
})

console.log(`Soma total = ${sumOverlaps}`)