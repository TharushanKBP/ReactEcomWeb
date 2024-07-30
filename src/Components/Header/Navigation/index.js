import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab d-flex align-items-center"
                onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoMdMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>MEN <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>WOMEN <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>BEAUTY <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>WATCHES <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>KIDS <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>GIFT <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>WATCHES <FaAngleRight className="ml-auto"/></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>watches</Button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>HOME</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/fashion">
                  <Button>MEN</Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/electronic">
                  <Button>WOMEN</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/bakery">
                  <Button>BEAUTY</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/mobiles">
                  <Button>WATCHES</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/grocery">
                  <Button>KIDS</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/blog">
                  <Button>GIFT</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">
                  <Button>BLOG</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">
                  <Button>CONTACT</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
