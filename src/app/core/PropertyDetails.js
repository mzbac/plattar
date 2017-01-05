import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Carousel from '../3dCarousel/CarouselContainer';
import AgentDetails from './AgentDetails';
import carouselTheme from './carouselThem.css';
import styles from './PropertyDetails.css';

class PropertyDetails extends Component {
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
    const { carouselOffset } = this.state;
    const { property } = this.props;
    if (_.isEmpty(property)) return null;
    const { images, mainImage, listers } = property;
    return (
      <div>
        <Carousel
          width={400}
          height={300}
          perspective={1000}
          theme={carouselTheme}
          offsetFactor={carouselOffset}
          carouselItemStyle={{ width: 380, height: 280 }}
          carouselItems={[mainImage, ...images]}
        />
        <div className={styles.next} onClick={this.next} >Next</div>
        <div className={styles.prev} onClick={this.prev} >Prev</div>
        <div className={styles.footer} >
          {
            listers.map((agent, index) => <AgentDetails key={index} agent={agent} />)
          }
        </div>
      </div>
    );
  }
}
PropertyDetails.propTypes = {
  property: PropTypes.object,
};
export default PropertyDetails;
