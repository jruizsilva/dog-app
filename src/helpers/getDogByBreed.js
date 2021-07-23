const getDogByBreed = async (breedID) => {
  const dogByBreedURL = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedID}`;
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'f8e391e3-2555-4ff0-a9f0-d0d9ec68abdb',
    },
  };
  const res = await fetch(dogByBreedURL, options);
  if (!res.ok) {
    const { url, status, statusText } = res;

    throw Error(`Error ${status}: ${statusText} in fetch ${url}`);
  }
  const [dog] = await res.json();

  const {
    url: image,
    breeds: [breed],
  } = dog;

  if (!breed) {
    return { image, breed: { id: 0, name: 'Random' } };
  } else {
    return { image, breed };
  }
};

export default getDogByBreed;
