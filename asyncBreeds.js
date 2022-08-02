// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    !error ? callback(data) : callback(undefined);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay', (d) => console.log(d));
//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
module.exports = breedDetailsFromFile;