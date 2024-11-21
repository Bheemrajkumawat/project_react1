import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Hello teacher</h3>
        <p>how i am sliding.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>hello teacher</h3>
        <p>I am sceond time sliding now </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>helloq teacher</h3>
        <p>
          dont slide me otherwise i will start from zero.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage