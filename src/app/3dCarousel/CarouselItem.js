import React, { PropTypes } from 'react';
import styles from './CarouselItem.css';

const getImageSize = ({ width, height }) => {
  return `${width}x${height}`;
};
const images =
  [{
    "uri": "/dd638f36948674b3700b1ae4ef36f6babdaa53cc7c912698a5b3d244898b85c3/image2.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/e86d6f5ba1ce1f76cd22e10936be1d2b20f2d79c9124811cfd321f3b5241e125/image3.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/418204d2e1b0d930a4b0d8f446db3a9c2cfe3853ebfd85bc289bcbece0fc511b/image4.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/d04722da7a2014f1d6ec043dbfc8edb4690540ed58363792775a4912bca5ee9c/image5.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/ea2a111b0220f1f5a014343f8df7fcebb29f1174b7ce3367dec7310632f0d5b0/image6.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/884cc46096f331eeb4046efe850d10cfbae48fe718f1eb479a32796272be5d0b/image7.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/c49cdf89614bf25caa54a541340863408faba169c0bad82b44b8b2eafe1fc608/image8.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/b91200f66a2bff0a245fafff139c9344e268bb1b133a1002eb203d66b62955f5/image9.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/5ae45ba8b3925955d919337ec6bd9315ede07a32d5feeb9d9c5b9b4b9e518daf/image10.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/51cb571f8159d7f052d8bf64aa7b5361676c508cee6b6db1611e6ad809034767/image11.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/fe032956678543d61c406654ece5ad25efc73d076a9a3b3edda3e9d028f730a7/image12.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/6912b772fb347a92f38e16c3b47436edbeec801769226392232dbb1cfe848141/image13.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/79a60f27429d23f1a7f52717b5185c64df80ebb22841cd4f7cfa9fa9957458cd/image14.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/de621bb539f1ff31e651f6226831e29ab13b584baaf5295e2221472a16c3aa9f/image15.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/2d58ed010a584352632d9df0b0efa6ba5b2a49a04395b00caf93d24fe42feb4b/image16.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/ad67e407f9e25736e06fd5159cacda5ee2dc19155e2dc157c61a65f34703ffdf/image17.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/7ecc9fa9696c7e6309a2cac17b08a6e6fbd167bec9cc4a5bf06e2c4ef97a3ec4/image18.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/738d9908cb318a11251f4e62812292aa8290a29036e318545b23535582e9d545/image19.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/9051899c1a146ac5d9c3bf1551252511f3ad3c04347deee4d1f92a18c760f748/image20.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/78d9a82c197e2ef4d0f1356c5b9d3cefb82a324e61f80e7dc389d3e6a414e236/image21.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }, {
    "uri": "/d1dfd41e2aefb2b9959d78babc9f9971558b77f56e01b3d9101cce4a7f864f2a/image22.jpg",
    "name": "photo",
    "server": "http://i2.au.reastatic.net"
  }];
const CarouselItem = props => {
  const { item, index, offset, rotateY, translateZ, carouselItemStyle } = props;
  return (
    <div
      className={styles.container}
      style={{ ...carouselItemStyle, transform: `rotateY(${rotateY + offset}deg) translateZ(${translateZ}px)` }}
    >
      <img
        src={`http://i2.au.reastatic.net/${getImageSize(carouselItemStyle)}${images[index].uri}`}
        alt={item.src}
      />

    </div>
  );
};

CarouselItem.propTypes = {
  index: PropTypes.number,
  rotateY: PropTypes.number,
  translateZ: PropTypes.number,
  offset: PropTypes.number,
  item: PropTypes.object,
  carouselItemStyle: PropTypes.object,
};
export default CarouselItem;
