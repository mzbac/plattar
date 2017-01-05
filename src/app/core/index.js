import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch';// fetch window.fetch polyfill
import Carousel from '../3dCarousel/CarouselContainer';
import carouselTheme from './carouselThem.css';
import styles from './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carouselOffset: 0,
    };
    this.next = (e) => {
      e.preventDefault();
      this.setState({ carouselOffset: this.state.carouselOffset + 1 });
    };
    this.prev = (e) => {
      e.preventDefault();
      this.setState({ carouselOffset: this.state.carouselOffset - 1 });
    };
  }

  render() {
    const {} = this.props;
    const { carouselOffset } = this.state;
    return (
      <div>
        <Carousel
          width={400}
          height={300}
          perspective={1000}
          theme={carouselTheme}
          offsetFactor={carouselOffset}
          carouselItemStyle={{ width: 380, height: 280 }}
          carouselItems={[{}, {}, {}, {}, {}, {}, {}, {}]}
        />
        <div className={styles.next} onClick={this.next} >Next</div>
        <div className={styles.prev} onClick={this.prev} >Prev</div>
      </div>
    );
  }
}

App.propTypes = {};
export default App;

