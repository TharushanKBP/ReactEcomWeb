import React, { useState } from "react";
import ProductZoom from "./../../Components/ProductZoom/index";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid"; // <-- Add this import
import QuantityBox from "./../../Components/QuatityBox/index";
import { BsCartFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import user1 from "../../assets/images/users/user-img1.jpg";
import user2 from "../../assets/images/users/user-img2.jpg";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log("Review Submitted", { name, email, rating, review });
    // Clear the form
    setRating(0);
    setReview("");
    setName("");
    setEmail("");
  };

  const descriptionContent = "This is the description of the product.";

  const additionalInfoContent = (
    <table className="table table-striped table-bordered">
      <tbody>
        <tr>
          <th>Weight</th>
          <td>500g</td>
        </tr>
        <tr>
          <th>Dimensions</th>
          <td>10 x 10 x 15 cm</td>
        </tr>
        <tr>
          <th>Material</th>
          <td>Stainless Steel</td>
        </tr>
        <tr>
          <th>Color</th>
          <td>Silver</td>
        </tr>
        <tr>
          <th>Brand</th>
          <td>Welch's</td>
        </tr>
      </tbody>
    </table>
  );

  const reviewsContent = (
    <div className="reviews-section p-4 bg-light rounded">
      <div className="overall-rating text-center mb-4">
        <h4 className="mb-2">Customer Reviews</h4>
        <div className="d-flex justify-content-center align-items-center">
          <Rating
            name="read-only"
            value={4.5}
            readOnly
            precision={0.5}
            size="large"
          />
          <span className="ml-2 h4 mb-0">4.5</span>
        </div>
        <p className="text-muted small mt-1">Based on 3 reviews</p>
      </div>
      <div className="review-list">
        <div className="review-item">
          <div className="d-flex align-items-center mb-3">
            <img src={user1} alt="Customer 1" className="review-img" />
            <div className="reviewer-details">
              <h6 className="mb-1">John Doe</h6>
              <span className="text-muted small">Verified Buyer</span>
            </div>
            <div className="ml-auto">
              <Rating
                name="read-only"
                value={5}
                readOnly
                precision={0.5}
                size="small"
              />
            </div>
          </div>
          <p className="mb-0 text-dark">Great product, really enjoyed it!</p>
        </div>

        <div className="review-item">
          <div className="d-flex align-items-center mb-3">
            <img src={user2} alt="Customer 2" className="review-img" />
            <div className="reviewer-details">
              <h6 className="mb-1">Jane Smith</h6>
              <span className="text-muted small">Verified Buyer</span>
            </div>
            <div className="ml-auto">
              <Rating
                name="read-only"
                value={3}
                readOnly
                precision={0.5}
                size="small"
              />
            </div>
          </div>
          <p className="mb-0 text-dark">It was okay, but could be better.</p>
        </div>
      </div>

      <div className="add-review-section mt-5">
        <h5>Add a Review</h5>
        <form onSubmit={handleReviewSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <TextField
              id="name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <label htmlFor="rating">Rating</label>
              </Grid>
              <Grid item xs={10}>
                <Rating
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={(e, newValue) => setRating(newValue)}
                  precision={0.5}
                  size="large"
                  required
                />
              </Grid>
            </Grid>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="review">Your Review</label>
            <TextField
              id="review"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#6d4aae", color: "#fff" }} // Custom color
            className="mt-4"
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTabs) {
      case 0:
        return <p>{descriptionContent}</p>;
      case 1:
        return <p>{additionalInfoContent}</p>;
      case 2:
        return reviewsContent;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light me-2">Brand :</span>
                    <span>Welch's</span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>

              <span className="badgel badge-success">IN STOCK</span>

              <p className="mt-2">
                Vivamus adipiscing nisl ut dolor dignissim semper.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => setActiveSize(0)}
                    >
                      50g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => setActiveSize(1)}
                    >
                      100g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => setActiveSize(2)}
                    >
                      200g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => setActiveSize(3)}
                    >
                      500g
                    </button>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-4">
                <QuantityBox />

                <Button className="btn-blue btn-lg btn-big btn-round">
                  <BsCartFill /> &nbsp; Add to cart
                </Button>

                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>

                <Tooltip title="Add to Wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="cart mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="tab-list">
                <li className="tab-item">
                  <button
                    className={`tab-button ${activeTabs === 0 ? "active" : ""}`}
                    onClick={() => setActiveTabs(0)}
                  >
                    Description
                  </button>
                </li>
                <li className="tab-item">
                  <button
                    className={`tab-button ${activeTabs === 1 ? "active" : ""}`}
                    onClick={() => setActiveTabs(1)}
                  >
                    Additional Info
                  </button>
                </li>
                <li className="tab-item">
                  <button
                    className={`tab-button ${activeTabs === 2 ? "active" : ""}`}
                    onClick={() => setActiveTabs(2)}
                  >
                    Reviews (3)
                  </button>
                </li>
              </ul>

              {/* Render the tab content based on the active tab */}
              <div className="tab-content mt-4">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
