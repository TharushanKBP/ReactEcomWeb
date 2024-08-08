import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import boximage1 from "../../assets/images/products/product2.jpg";
import boximage2 from "../../assets/images/products/product2-1.jpg";
import boximage3 from "../../assets/images/products/product2-2.jpg";
import boximage4 from "../../assets/images/products/product2-3.jpg";
import boximage5 from "../../assets/images/products/product2-4.jpg";
import QuantityBox from "../../Components/QuatityBox/index";
import { useRef, useContext } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { FaRegHeart } from "react-icons/fa6";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";

const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    if (zoomSlider.current && zoomSliderBig.current) {
      zoomSlider.current.slickGoTo(index);
      zoomSliderBig.current.slickGoTo(index);
    } else {
      console.error("zoomSlider or zoomSliderBig is undefined");
    }
  };

  return (
    <Dialog
      open={true}
      className="productModal"
      onClose={()=>context.setIsOpenProductModal(false)}
    >
      <Button className="close_" onClick={()=>context.setIsOpenProductModal(false)}>
        <MdClose />
      </Button>
      <h4 className="mb-1 font-weight-bold">
        All Natural Italian-Style Chicken Meatballs
      </h4>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brands:</span>
          <span className="ml-2">
            <b>Welch's</b>
          </span>
        </div>

        <Rating
          name="read-only"
          value={3}
          size="small"
          precision={0.5}
          readOnly
        ></Rating>
      </div>

      <hr />

      <div className="row mt-2 productDetaileModal">
        <div className="col-md-5">
          <div className="productZoom position-relative">
            <div className="badge badge-primary">23%</div>
            <Slider
              {...settings2}
              className="zoomSliderBig"
              ref={zoomSliderBig}
            >
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={boximage1}
                />
              </div>

              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={boximage2}
                />
              </div>

              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={boximage3}
                />
              </div>

              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={boximage4}
                />
              </div>

              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={boximage5}
                />
              </div>
            </Slider>
          </div>

          <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
            <div className="item">
              <img src={boximage1} className="w-100" onClick={() => goto(0)} />
            </div>
            <div className="item">
              <img src={boximage2} className="w-100" onClick={() => goto(1)} />
            </div>
            <div className="item">
              <img src={boximage3} className="w-100" onClick={() => goto(2)} />
            </div>
            <div className="item">
              <img src={boximage4} className="w-100" onClick={() => goto(3)} />
            </div>

            <div className="item">
              <img src={boximage5} className="w-100" onClick={() => goto(4)} />
            </div>
          </Slider>
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-4">
            <span className="oldPrice lg mr-2">$10.45</span>
            <span className="netPrice text-danger lg">$08.45</span>
          </div>

          <span className="badge bg-success">IN STOCK</span>

          <p className="mt-3">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt.
          </p>

          <div className="d-flex align-items-center">
            <QuantityBox />

            <Button className="btn-blue btn-lg btn-big btn-round ml-3">
              Add to Cart
            </Button>
          </div>

          <div className="d-flex align-items-center mt-5 actions">
            <Button className="btn-round btn-sml" variant="outlined">
              <FaRegHeart style={{ marginRight: "9px" }} />
              ADD TO WISHLIST
            </Button>

            <Button className="btn-round btn-sml ml-3" variant="outlined">
              <MdCompareArrows style={{ marginRight: "9px" }} />
              COMPARE
            </Button>

          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
