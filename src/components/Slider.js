import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import sliderData from './Slider-data';
import '../styling/Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  // slideLength = 1 2 3
  // currentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 7000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
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

  return (
    <div className="slider">
      <h1 className="main-title">
        Communauté de la Foi Chrétienne dans le Monde
      </h1>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => (
        <div
          className={
            index === currentSlide
              ? 'slide current' : 'slide'
}
          key={slide.heading}
        >
          {index === currentSlide && (
          <>
            <img src={slide.image} alt="slide" />
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

export default Slider;
