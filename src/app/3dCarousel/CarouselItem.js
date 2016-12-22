import React, { PropTypes } from 'react';
import styles from './CarouselItem.css';

const getImageSize = ({ width, height }) => {
  return `${width}x${height}`;
};

const CarouselItem = props => {
  const { item, index, rotateY, translateZ, carouselItemStyle } = props;
  return (
    <div
      className={styles.container}
      style={{ ...carouselItemStyle, transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)` }}
    >
      <img
        src={`http://i2.au.reastatic.net/${getImageSize(carouselItemStyle)}/6015f1cfe8892843a572aa547a1370cee729f28b325151d902d8b4007cb1de5b/main.jpg`}
        alt={item.src}
      />

    </div>
  );
};

CarouselItem.propTypes = {
  index: PropTypes.number,
  rotateY: PropTypes.number,
  translateZ: PropTypes.number,
  item: PropTypes.object,
  carouselItemStyle: PropTypes.object,
};
export default CarouselItem;
