import React, { useState, useEffect } from 'react';
import getRazas from '../helpers/getRazas';
import Error from './Error';

const initialRazas = [];

const Select = ({ updateDog }) => {
  const [razas, setRazas] = useState(initialRazas);
  const [error, setError] = useState(null);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    updateDog(value);
  };

  const updateRazas = async () => {
    try {
      const data = await getRazas();
      setRazas(data);
      setError(null);
    } catch (error) {
      console.info(error);
      setError('Error al cargar la lista de razas');
    }
  };

  useEffect(() => {
    updateRazas();
  }, []);

  return (
    <>
      <select name='raza' onChange={handleSelectChange}>
        {razas.length > 0 &&
          razas.map((raza) => (
            <option key={raza.id} value={raza.id}>
              {raza.name}
            </option>
          ))}
      </select>
      {error && <Error error={error} />}
    </>
  );
};

export default Select;
