import React, { PropTypes } from 'react';
import Carousel from '../3dCarousel/CarouselContainer';
import carouselTheme from './carouselThem.css';
import styles from './index.css';

const App = props => {
  const {} = props;

  return (
    <div>
      <Carousel
        width={400}
        height={300}
        perspective={1000}
        theme={carouselTheme}
        carouselItemStyle={{ width: 380, height: 280 }}
        carouselItems={[{}, {}, {}, {}, {}, {}, {}, {}]}
      />
      <div className={styles.next} >Next</div>
      <div className={styles.prev} >Prev</div>
    </div>
  );
};

App.propTypes = {};
export default App;
