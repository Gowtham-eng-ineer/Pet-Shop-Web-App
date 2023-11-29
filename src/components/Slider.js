import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img alt="slide1" src="https://placekitten.com/601/402" />
      </div>
      <div>
        <img alt="slide2" src="https://placekitten.com/602/402" />
      </div>
      <div>
        <img alt="slide3" src="https://placekitten.com/603/403" />
      </div>
    </Carousel>
  );
};

export default Slider;
