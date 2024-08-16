import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuatityBox/index";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from './../ProductZoom/index';

const ProductModal = (props) => {
  
  const context = useContext(MyContext);

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
          <ProductZoom/>
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
