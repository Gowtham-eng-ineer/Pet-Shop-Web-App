import React from 'react';
import './cats.css';

const catData = [
  {
    id: 1,
    name: 'Fluffy',
    breed: 'Persian',
    age: 2,
    price: '$500',
    image: 'https://placekitten.com/800/600',
  },
  {
    id: 2,
    name: 'Whiskers',
    breed: 'Siamese',
    age: 1,
    price: '$450',
    image: 'https://placekitten.com/800/601',
  },
  {
    id: 3,
    name: 'Mittens',
    breed: 'Maine Coon',
    age: 3,
    price: '$600',
    image: 'https://placekitten.com/800/602',
  },
  {
    id: 4,
    name: 'Shadow',
    breed: 'Black Shorthair',
    age: 4,
    price: '$550',
    image: 'https://placekitten.com/800/603',
  },
  {
    id: 5,
    name: 'Cupcake',
    breed: 'Ragdoll',
    age: 2,
    price: '$700',
    image: 'https://placekitten.com/800/604',
  },
];

const CatData = () => {
  return catData.map((cat) => (
    <div key={cat.id} className="catCard">
      <img
        src={cat.image}
        alt={cat.name}
        className="catImage"
      />
      <p>Name: {cat.name}</p>
      <p>Breed: {cat.breed}</p>
      <p>Age: {cat.age} years</p>
      <p>Price: {cat.price}</p>
    </div>
  ));
};

export default CatData;
