const request = require('request');



const fetchBreedDescription = function(breedName, callback) { // takes a callback as 2nd param
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null); // => passes the error if there is one, null for description
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback('Breed not found', null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };