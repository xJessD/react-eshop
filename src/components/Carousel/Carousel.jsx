import style from './Carousel.module.scss';
import { useState } from 'react';

const Carousel = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className={style.Carousel}>
      <div className={style.Carousel__content}>
        <div className={style.Carousel__content_arrLeft} onClick={goToPrevious}>&lsaquo;</div>
        <div className={style.Carousel__content_arrRight} onClick={goToNext}>&rsaquo;</div>
        <div className={style.slides} 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        <div>hellolo
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>•</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;