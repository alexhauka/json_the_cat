const request = require('request');
const args = process.argv.slice(2);

const fixSearchLength = (breed) => {
  if (breed.length > 4) {
    let breedSliced = breed.slice(0, 4);
    return breedSliced;
  } else {
    return breed;
  }
};

const breedFetcher = function() {
  let searchBreed = fixSearchLength(args[0]);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {
    if (error) {
      console.log('error: ', error); // => print the error if one occurred
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        throw new Error(`Breed not found.`);
      } else {
        console.log(`description: `, data[0].description);
      }
    } 
  });
};


breedFetcher();