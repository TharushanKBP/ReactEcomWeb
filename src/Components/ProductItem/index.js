import Button from "@mui/material/Button";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import banner2 from "../../assets/images/products/addtocart-modal.jpg";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img className="w-100" src={banner2} alt="Product 1" />
        <span className="badge badge-primary">30%</span>

        <div className="actions">
          <Button>
            <TfiFullscreen />
          </Button>
          <Button>
            <IoMdHeartEmpty style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>
      <div className="info">
        <h4>Werther's Original Carmel Hard Candies</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />

        <div className="d-flex">
          <span className="oldPrice">$20.00</span>
          <span className="netPrice text-danger ml-2">$15.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
