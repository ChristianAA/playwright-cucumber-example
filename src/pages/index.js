const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname);

const pageClasses = fs.readdirSync(pagesPath)
  .filter(file => file.endsWith('Page.js'))
  .map(file => {
    return require(path.join(pagesPath, file));
  });

module.exports = pageClasses;