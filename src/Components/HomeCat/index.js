import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/red_apple.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ea",
    "#fff3ff",
    "#f2fceb",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ea",
    "#fff3ff",
    "#f2fceb",
    // "#fffceb",
    // "#ecffec",
    // "#feefea",
    // "#fff3ea",
    // "#fff3ff",
    // "#f2fceb",
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">FEATURED CATEGORIES</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={0}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item text-center cursor" style={{ backgroundColor: item }}>
                <img src={image1} alt="Product" />
                <h6>Red Apple</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
