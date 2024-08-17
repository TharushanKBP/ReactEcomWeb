import React from "react";
import cartimage1 from "../../assets/images/products/bag-product1.jpg";
import cartimage2 from "../../assets/images/products/bag-product10.jpg";
import cartimage3 from "../../assets/images/products/bag-product12.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const Cart = () => {
  return (
    <section className="section cartPage">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="hd mb-0">Your Cart</h2>
            <p>
              There are <b>3</b> Products in your cart
            </p>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center CartItemimgWrapper">
                        <div className="img-wrapper">
                          <img
                            src={cartimage1}
                            className="w-100"
                            alt="Product"
                          />
                        </div>
                        <div className="product-info">
                          <p className="product-name">Bag Product 1</p>
                          <Rating
                            name="read-only"
                            value={3.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </td>
                    <td>$50.00</td>
                    <td>
                      <input
                        type="number"
                        className="form-control quantity-input"
                        defaultValue={1}
                        min={1}
                      />
                    </td>
                    <td>$50.00</td>
                    <td>
                      <Button>
                        <RiDeleteBinLine size={21} color="red" />
                      </Button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center CartItemimgWrapper">
                        <div className="img-wrapper">
                          <img
                            src={cartimage2}
                            className="w-100"
                            alt="Product"
                          />
                        </div>
                        <div className="product-info">
                          <p className="product-name">Bag Product 1</p>
                          <Rating
                            name="read-only"
                            value={2.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </td>
                    <td>$50.00</td>
                    <td>
                      <input
                        type="number"
                        className="form-control quantity-input"
                        defaultValue={1}
                        min={1}
                      />
                    </td>
                    <td>$50.00</td>
                    <td>
                      <Button>
                        <RiDeleteBinLine size={21} color="red" />
                      </Button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center CartItemimgWrapper">
                        <div className="img-wrapper">
                          <img
                            src={cartimage3}
                            className="w-100"
                            alt="Product"
                          />
                        </div>
                        <div className="product-info">
                          <p className="product-name">Bag Product 1</p>
                          <Rating
                            name="read-only"
                            value={1.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </td>
                    <td>$50.00</td>
                    <td>
                      <input
                        type="number"
                        className="form-control quantity-input"
                        defaultValue={1}
                        min={1}
                      />
                    </td>
                    <td>$50.00</td>
                    <td>
                      <Button>
                        <RiDeleteBinLine size={21} color="red" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4">
            <div className="cart-totals">
              <h3 className="cart-totals-title">Cart Totals</h3>
              <div className="cart-totals-content">
                <div className="cart-totals-item">
                  <span>
                    <b>Subtotal</b>
                  </span>
                  <span className="cart-totals-amount">
                    <p>$500</p>
                  </span>
                </div>
                <div className="cart-totals-item">
                  <span>
                    <b>Shipping</b>
                  </span>
                  <span className="cart-totals-amount">
                    <p style={{ color: "black" }}>Free</p>
                  </span>
                </div>
                <div className="cart-totals-item">
                  <span>
                    <b>Estimate for</b>
                  </span>
                  <span className="cart-totals-amount">
                    <p style={{ color: "black" }}>Sri Lanka</p>
                  </span>
                </div>
                <div className="cart-totals-item total">
                  <span>
                    <b>Total</b>
                  </span>
                  <span className="cart-totals-amount">
                    <p>$550</p>
                  </span>
                </div>
                <button className="btn btn-primary btn-block">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
