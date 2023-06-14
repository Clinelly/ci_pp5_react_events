import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselImg1 from "../assets/carousel_1.jpg";
import CarouselImg2 from "../assets/carousel_2.jpg";
import CarouselImg3 from "../assets/carousel_3.jpg";
import styles from "../styles/HomePage.module.css"

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={CarouselImg1} alt="First slide" />
          <Carousel.Caption className={styles.CarouselLabel}>
            <h3>Start an Epic Adventure</h3>
            <p>Meet people from around the world and organise the trip of a lifetime!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={CarouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption className={styles.CarouselLabel}>
            <h3>Build a New Club</h3>
            <p>Connect with like minded individuals and build a team for success!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={CarouselImg3} alt="Third slide" />
          <Carousel.Caption className={styles.CarouselLabel}>
            <h3>Host Casual Meets</h3>
            <p>
              New to an area? Put yourself out there and expand your social network!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
