import React, { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { GrClose } from "react-icons/gr";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    setCountryList(context.countryList);
    setFilteredCountryList(context.countryList); // Initialize filtered list with full list
  }, [context.countryList]);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setselectedCountry(country);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const filteredList = countryList.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setFilteredCountryList(filteredList);
    } else {
      setFilteredCountryList(countryList); // Reset to full list if keyword is empty
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <div className="modalContent">
          <h4 className="mb-0">Choose your Delivery Location</h4>
          <p>Enter your address and we will specify the offer for your area.</p>
          <Button className="close_" onClick={() => setIsOpenModal(false)}>
            <GrClose />
          </Button>

          <div className="headerSearch w-100">
            <input
              type="text"
              placeholder="Search your area"
              onChange={filterList}
            />
            <Button>
              <FaSearch />
            </Button>
          </div>

          <ul className="countryList mt-3">
            {filteredCountryList.length !== 0 ? (
              filteredCountryList.map((item, index) => (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              ))
            ) : (
              <li>No countries found</li>
            )}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
