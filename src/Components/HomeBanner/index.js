import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation } from '@mui/icons-material';

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className='item'>
            <img src="https://img.lazcdn.com/us/domino/421bb745-67b4-460b-855c-e529ddc6dd8f_SG-1976-688.jpg_2200x2200q80.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://img.lazcdn.com/us/domino/04643538-1382-4501-859b-e9d3f5374771_SG-1976-688.jpg_2200x2200q80.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://img.lazcdn.com/us/domino/de59fc3f-512e-44f8-b3dc-a02b7d33f587_SG-1976-688.jpg_2200x2200q80.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://img.lazcdn.com/us/domino/e622e546-ec2d-48c8-8f6b-38eccd9ea8f6_SG-1976-688.jpg_2200x2200q80.jpg" className='w-100'/>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
