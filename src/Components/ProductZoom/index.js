import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import boximage1 from "../../assets/images/products/product2.jpg";
import boximage2 from "../../assets/images/products/product2-1.jpg";
import boximage3 from "../../assets/images/products/product2-2.jpg";
import boximage4 from "../../assets/images/products/product2-3.jpg";
import boximage5 from "../../assets/images/products/product2-4.jpg";
import { useRef,useState } from "react";

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
  

    const goto = (index) => {
          setSlideIndex(index);
          zoomSlider.current.slickGoTo(index);
          zoomSliderBig.current.slickGoTo(index);
       
      }

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
    

  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <div className="badge badge-primary">23%</div>
        <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={boximage1} />
          </div>

          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={boximage2} />
          </div>

          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={boximage3} />
          </div>

          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={boximage4} />
          </div>

          <div className="item">
            <InnerImageZoom zoomType="hover" zoomScale={1} src={boximage5} />
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
  );
};

export default ProductZoom;
