import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import sliderData from './Slider-data';
import '../styling/Slider.scss';

const Slider = ({ onLoad }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 7000;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('next');
      setCurrentSlide((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('prev');
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideLength - 1 : prevSlide - 1));
    }
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false); // Reset transitioning state
      }, 500); // Adjust timing to match CSS transition duration

      return () => {
        clearTimeout(transitionTimeout);
      };
    }

    return undefined;
  }, [isTransitioning]);

  return (
    <div className="slider">
      <h1 className="main-title">
        Communauté de la Foi Chrétienne dans le Monde (C.F.C.M)
      </h1>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => (
        <div
          className={
            index === currentSlide
              ? 'slide current'
              : `slide ${slideDirection}`
          }
          key={slide.heading}
        >
          {index === currentSlide && (
          <>
            <img src={slide.image} alt="slide" onLoad={onLoad} className="img-slide" />
            <div className="content">
              <h2>{slide.heading}</h2>
              <p>{slide.desc}</p>
            </div>
          </>
          )}
        </div>
      ))}
    </div>
  );
};

Slider.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default Slider;
