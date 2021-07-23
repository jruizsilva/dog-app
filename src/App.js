import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Error from './components/Error';
import Select from './components/Select';
import Spinner from './components/Spinner';
import getDogByBreed from './helpers/getDogByBreed';
import getRandomDog from './helpers/getRandomDog';

const initialDog = {
  image: '',
  breed: {
    name: '',
    id: '',
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDog = async (breedID) => {
    setLoading(true);
    try {
      if (!breedID) {
        const newDog = await getRandomDog();
        setDog(newDog);
      } else {
        const newDog = await getDogByBreed(breedID);
        setDog(newDog);
      }
      setError(null);
    } catch (error) {
      console.log(error);
      setError('Error al obtener un perro');
    }
    setLoading(false);
  };

  useEffect(() => {
    updateDog();
  }, []);

  return (
    <div className='app'>
      <Select updateDog={updateDog} />
      {loading ? <Spinner /> : <Card dog={dog} updateDog={updateDog} />}
      {error && <Error error={error} />}
    </div>
  );
}

export default App;
