const fixSearchLength = (breed) => {
  if (breed.length > 4) {
    let breedSliced = breed.slice(0, 4);
    return breedSliced;
  } else {
    return breed;
  }
};

module.exports = fixSearchLength;