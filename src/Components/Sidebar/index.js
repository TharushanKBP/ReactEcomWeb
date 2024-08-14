import React, { useState } from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from "react-router-dom";
import bannermain from "../../assets/images/bannermain_2.png";

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 60000]);

  const handleCheckboxChange = (event) => {
    const category = event.target.name;
    setSelectedCategories((prev) =>
      event.target.checked
        ? [...prev, category]
        : prev.filter((item) => item !== category)
    );
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Men"
                      checked={selectedCategories.includes('Men')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Men"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Women"
                      checked={selectedCategories.includes('Women')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Women"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Beauty"
                      checked={selectedCategories.includes('Beauty')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Beauty"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Kids"
                      checked={selectedCategories.includes('Kids')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Kids"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Women"
                      checked={selectedCategories.includes('Women')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Women"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Women"
                      checked={selectedCategories.includes('Women')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Women"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Women"
                      checked={selectedCategories.includes('Women')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Women"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>FILTER BY PRICE</h6>

          <RangeSlider
            value={priceRange}
            onInput={handleSliderChange}
            min={100}
            max={60000}
            step={5}
          />
          <div className='d-flex pt-2v pb-2 priceRange'>
            <span>From: <strong className='text-success'>Rs: {priceRange[0]}</strong></span>
            <span className='ml-auto'>To: <strong className='text-dark'>Rs: {priceRange[1]}</strong></span>
          </div>
          {/* <div className="scroll">
            <p>Price Range: {priceRange[0]} - {priceRange[1]}</p>
          </div> */}
        </div>

        <div className="filterBox">
          <h6>PRODUCT STATUS</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="In Stock"
                      checked={selectedCategories.includes('In Stock')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="In Stock"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="On Sale"
                      checked={selectedCategories.includes('On Sale')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="On Sale"
                />
              </li>
             
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>BRANDS</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Frito Lay"
                      checked={selectedCategories.includes('Frito Lay')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Frito Lay"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Nespresso"
                      checked={selectedCategories.includes('Nespresso')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Nespresso"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Oreo"
                      checked={selectedCategories.includes('Oreo')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Oreo"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Quaker"
                      checked={selectedCategories.includes('Quaker')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Quaker"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Welch's"
                      checked={selectedCategories.includes('Welchs')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Welch's"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Welch's"
                      checked={selectedCategories.includes('Welchs')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Welch's"
                />
              </li>

              <li>
                <FormControlLabel
                  className="w-100"
                  control={
                    <Checkbox
                      name="Welch's"
                      checked={selectedCategories.includes('Welchs')}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="Welch's"
                />
              </li>
             
            </ul>
          </div>
        </div>


        <Link to="#"><img src={bannermain} className='w-100'/></Link>






      </div>
    </>
  );
};

export default Sidebar;
