import React from 'react';

const Card = ({ dog, updateDog }) => {
  return (
    <div
      className='card animate__animated animate__bounce'
      onClick={() => updateDog(dog.breed.id)}
    >
      <img src={dog.image} alt={dog.breed.name} />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
