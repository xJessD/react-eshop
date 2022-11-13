import style from './Carousel.module.scss';
import './Slide.module.scss';
import { useState } from 'react';

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const goToPrevious = () => {
    setCurrent( current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  }

  return (
    <div className={style.Carousel}>
      <div className={style.Carousel__content}>

        <div className={style.Carousel__content_arrLeft} onClick={goToPrevious}>&lsaquo;</div>
        <div className={style.Carousel__content_arrRight} onClick={goToNext}>&rsaquo;</div>

        <div className={style.Carousel__content_nav}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={()=> goToSlide(slideIndex)}>•</div>
          ))}
        </div>

      {
        slides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active': 'slide' } key={index}>
              {index === current && (
                <img src={slide.url} className={style.cImg}></img>
              )}
            </div>
            
          );
        })
      }
        
      </div>


    </div>
  );
};

export default Carousel;