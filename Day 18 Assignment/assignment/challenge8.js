const fs = require('fs').promises;
const path = require('path');

const input = path.join(__dirname, 'input.txt');
const output = path.join(__dirname, 'output.txt');

fs.readFile(input, 'utf8')
  .then(data => {
  
    return fs.writeFile(output, data).then(() => data);
  })
  .then(() => {
    console.log('File copied successfully!');
  })
  .catch(err => {
    console.error('Error during file copy:', err.message);
  });
