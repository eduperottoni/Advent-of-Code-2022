import fs from 'fs';

function readFileLines(filePath) {
  try {
    const data = fs.readFileSync(`${filePath}`, 'utf8');
    let dataLines = data.split(/\r\n|\n/); 
    dataLines.push('');
    return dataLines;
  }  catch (erro) {
    console.log(erro);
    return;
  }
}

export default readFileLines;