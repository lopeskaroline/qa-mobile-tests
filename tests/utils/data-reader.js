const fs = require('fs');
const path = require('path');

function readJson(fileName) {
  const filePath = path.resolve(__dirname, '../test-data', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { readJson };