import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import slide1 from '../../assets/images/slideshow/Beige and Gray Elegant Jewerly Photo Etsy Shop Cover  (1).png';
import slide2 from '../../assets/images/slideshow/Beige and Gray Elegant Jewerly Photo Etsy Shop Cover  (2).png';
import slide3 from '../../assets/images/slideshow/Beige and Gray Elegant Jewerly Photo Etsy Shop Cover  (3).png';
import slide4 from '../../assets/images/slideshow/Beige and Gray Elegant Jewerly Photo Etsy Shop Cover .png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation,Autoplay } from 'swiper/modules';

const HomeBanner = () => {
  
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img src={slide1} className="w-100" alt="Slide 1" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src={slide2} className="w-100" alt="Slide 1" />
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="item">
              <img src={slide3} className="w-100" alt="Slide 1" />
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="item">
              <img src={slide4} className="w-100" alt="Slide 1" />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};


export default HomeBanner;
