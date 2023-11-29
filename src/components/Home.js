import React from 'react';
import Slider from './Slider';
import Features from './Features';
const Home = () => {
  return (
    <div>
      <h1>Cats for Sale 😍😍💕</h1>
      <Slider />

      <div style={{ padding: '20px' }}>
        <h2>Featured Cats</h2>
      </div>
      <Features />
    </div>
  );
};


export default Home;
