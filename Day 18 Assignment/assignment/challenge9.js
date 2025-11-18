const fs = require('fs').promises;
const path = require('path');

const input = path.join(__dirname, 'input.txt');
const output = path.join(__dirname, 'output_async.txt');

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function copyFileWithDelay() {
  try {
    const data = await fs.readFile(input, 'utf8');

    await delay(1000); // 1 second

    await fs.writeFile(output, data);
    console.log('File copied successfully (async/await)!');
  } catch (err) {
    console.error('Error in async copy:', err.message);
  }
}

copyFileWithDelay();
