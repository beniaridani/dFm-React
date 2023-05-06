import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function TestimonialCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="testimonial-image" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_07/3227271/200212-jennifer-aniston-cs-900a.jpg" alt="driver-profile" />
        <Carousel.Caption>
          <h2 className="testimonial-text">Working with a dFm Website is a recommended job for anyone looking to make some money in their spare time</h2>
          <em>Rechel Grin - Driver, Illinois</em>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="testimonial-image" src="https://i.guim.co.uk/img/media/561c7de9ead71433817771724a31373c2d4f32e7/0_279_2400_1440/master/2400.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=58c5062d3a48e8c292ac97c87d57e958" alt="driver-profile" />
        <Carousel.Caption>
          <h2 className="testimonial-text">I recommend everyone to use the site, its use is easy and simple. Just getting from place to place</h2>
          <em>Goey Tribbiani - Passenger, Kalifornia</em>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TestimonialCarousel;
