import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner_1.png";
import banner2 from "../../assets/images/banner_2.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductItem from "../../Components/ProductItem/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  className="cursor w-100"
                  src={banner1}
                  alt="Promotional Banner"
                />
              </div>

              <div className="banner mt-4">
                <img
                  className="cursor w-100"
                  src={banner2}
                  alt="Promotional Banner"
                />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ms-auto">
                  View all <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4 d-flex">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ms-auto">
                  View all <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
