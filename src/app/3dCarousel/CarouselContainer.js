import React, { PropTypes } from 'react';
import CarouselItem from './CarouselItem';
import styles from './CarouselContainer.css';

const getCarouselItemRotateY = (itemNum) => {
  if (itemNum <= 0) return 0;
  return Math.round(360 / itemNum);
};
const getCarouselItemTranslateZ = (containerWidth, itemNum) => {
  return Math.round((containerWidth / 2) /
    Math.tan(((Math.PI * 2) / itemNum) / 2));
};

const CarouselContainer = props => {
  const {
    width,
    height,
    perspective,
    carouselItems,
    carouselItemStyle,
    theme = styles,
  } = props;

  return (
    <div
      className={theme.container}
      style={{
        width,
        height,
        perspective,
      }}
    >
      <div className={theme.carousel} >
        {
          carouselItems.map((item, i) => <CarouselItem
            rotateY={getCarouselItemRotateY(carouselItems.length) * i}
            item={item}
            index={i}
            key={i}
            carouselItemStyle={carouselItemStyle}
            translateZ={getCarouselItemTranslateZ(width, carouselItems.length)}
          />)
        }
        <div>
          <button>previous</button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
};

CarouselContainer.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  perspective: PropTypes.number.isRequired,
  carouselItemStyle: PropTypes.object,
  theme: PropTypes.object,
  carouselItems: PropTypes.array.isRequired,
};
export default CarouselContainer;
