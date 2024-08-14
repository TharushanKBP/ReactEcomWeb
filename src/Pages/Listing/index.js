import Sidebar from "../../Components/Sidebar/index";
import shopbanner from "../../assets/images/slideshow/Beige and Gray Elegant Jewerly Photo Etsy Shop Cover  (2).png";
import { BsGridFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { TiThMenu } from "react-icons/ti";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbGridDots } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "./../../Components/ProductItem/index";
import Pagination from "@mui/material/Pagination";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    if (value) setItemsPerPage(value);
    setAnchorEl(null);
  };

  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

            <div className="content_right">
              <img
                src={shopbanner}
                alt="Shop Banner"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">

                  <Button onClick={() => setProductView('one')}>
                    <TiThMenu />
                  </Button>
                  <Button onClick={() => setProductView('two')}>
                    <BsGridFill />
                  </Button>
                  <Button onClick={() => setProductView('three')}>
                    <TbGridDots />
                  </Button>
                  <Button onClick={() => setProductView('four')}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show {itemsPerPage} <FaAngleDown />
                  </Button>

                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={() => handleClose(null)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handleClose(10)}>10</MenuItem>
                    <MenuItem onClick={() => handleClose(20)}>20</MenuItem>
                    <MenuItem onClick={() => handleClose(30)}>30</MenuItem>
                    <MenuItem onClick={() => handleClose(40)}>40</MenuItem>
                    <MenuItem onClick={() => handleClose(50)}>50</MenuItem>
                    <MenuItem onClick={() => handleClose(60)}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination count={10} color="primary" />
              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
