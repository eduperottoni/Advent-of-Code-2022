import readFileLines from "../../utils/readFile.js";

var data = readFileLines({filePath:'../input.txt',
                        end: false});

const checkFullyContains = pairs => {
    const ranges = pairs.map( item => {
        return item.split('-').map( item => Number(item))
    });
    
    if ((ranges[0][0] >= ranges[1][0] && ranges[0][1] <= ranges[1][1])
        || (ranges[1][0] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])) {
            return true
        }
}

let sumFullyContains = 0

data.forEach( line => {
    const pairs = line.split(',')
    checkFullyContains(pairs) && sumFullyContains++
})

console.log(sumFullyContains)