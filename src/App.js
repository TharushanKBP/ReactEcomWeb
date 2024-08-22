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
import SignIn from './Pages/SignIn/index';
import SignUp from './Pages/SignUp/index';
import Cart from './Pages/Cart/index';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);


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
    setIsOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>

        {
          isHeaderFooterShow === true && <Header />
        }
        
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
        </Routes>

        {
          isHeaderFooterShow === true &&  <Footer/>
        }
       
        {
        isOpenProductModal && <ProductModal  />
        }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };