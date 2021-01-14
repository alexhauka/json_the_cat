const fixSearchLength = require('./fixSearchLength');
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = fixSearchLength(process.argv[2]);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});