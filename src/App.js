import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal/index"; 
import axios from 'axios';
import ProductDetails from './Pages/ProductDetails/index';
import Cart from './Pages/Cart/index';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async(url) => {
   
      const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data)
    }) 
      
    }


  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails />} />
          <Route exact={true} path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>

        {
        isOpenProductModal && <ProductModal  />
        }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };