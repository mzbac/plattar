import React, { PropTypes } from 'react';
import styles from './CarouselItem.css';

const getImageSize = ({ width, height }) => {
  return `${width}x${height}`;
};
const CarouselItem = props => {
  const { item, offset, rotateY, translateZ, carouselItemStyle } = props;
  return (
    <div
      className={styles.container}
      style={{ ...carouselItemStyle, transform: `rotateY(${rotateY + offset}deg) translateZ(${translateZ}px)` }}
    >
      <img
        src={`${item.server}/${getImageSize(carouselItemStyle)}${item.uri}`}
        alt={item.src}
      />

    </div>
  );
};

CarouselItem.propTypes = {
  rotateY: PropTypes.number,
  translateZ: PropTypes.number,
  offset: PropTypes.number,
  item: PropTypes.object,
  carouselItemStyle: PropTypes.object,
};
export default CarouselItem;
