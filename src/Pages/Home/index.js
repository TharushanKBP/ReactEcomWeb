import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner_1.png";
import banner2 from "../../assets/images/banner_2.png";
import banner3 from "../../assets/images/banner_3.png";
import banner4 from "../../assets/images/banner_4.png";
import footer_image from "../../assets/images/footer_image_1.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductItem from "../../Components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeCat from "../../Components/HomeCat";
import { IoMailOutline } from "react-icons/io5";


const Home = () => {
  return (
    <>
      <HomeBanner />

      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    className="cursor w-100"
                    src={banner1}
                    alt="Promotional Banner 1"
                  />
                </div>
                <div className="banner mt-4">
                  <img
                    className="cursor w-100"
                    src={banner2}
                    alt="Promotional Banner 2"
                  />
                </div>
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
                  pagination={{ clickable: true }}
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

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img
                    src={banner3}
                    className="cursor w-100"
                    alt="Promotional Banner 3"
                  />
                </div>
                <div className="banner">
                  <img
                    src={banner4}
                    className="cursor w-100"
                    alt="Promotional Banner 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on promotions and
                coupons.
              </p>

              <form>
                <IoMailOutline/>
                <input type="text" placeholder="Your Email Address"/>
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={footer_image} alt="Newsletter Promotion" />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
