const getRandomDog = async () => {
  const randomDogURL = 'https://api.thedogapi.com/v1/images/search';
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'f8e391e3-2555-4ff0-a9f0-d0d9ec68abdb',
    },
  };
  const res = await fetch(randomDogURL, options);
  if (!res.ok) {
    const { url, status, statusText } = res;

    throw Error(`Error ${status}: ${statusText} in fetch ${url}`);
  }
  const [dog] = await res.json();

  const {
    url: image,
    breeds: [breed],
  } = dog;

  if (breed) {
    return { image, breed };
  } else {
    return { image, breed: { name: 'random', id: 0 } };
  }
};

export default getRandomDog;
