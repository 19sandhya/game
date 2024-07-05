import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Fifth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="Sixth slide" />
      </Carousel.Item>


    </Carousel>
  );
}
export default CarouselComponent;
