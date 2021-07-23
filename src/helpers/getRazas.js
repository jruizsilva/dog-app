const getRazas = async () => {
  const razasURL = 'https://api.thedogapi.com/v1/breeds';
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'f8e391e3-2555-4ff0-a9f0-d0d9ec68abdb',
    },
  };
  const res = await fetch(razasURL, options);
  if (!res.ok) {
    const { url, status, statusText } = res;

    throw Error(`Error ${status}: ${statusText} in fetch ${url}`);
  }
  const razas = await res.json();
  return razas;
};

export default getRazas;
