import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './Pages/homepage';
import Wishlist from './Components/wishlist';
import ShoppingCart from './Components/shoppingcart';
import SignupPage from './Components/signup';
import LoginPage from './Components/login';
import RetailerPage from './Pages/RetailerPage';
import ProductPage from './Pages/ProductPage';
import SellerPanel from './Components/sellerPanel';
import ProductUpload from './Components/ProductUpload';
import Trial from './Components/trial';
import Buysection from './Components/buysection';


library.add(faCoffee, faCheck);
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/retailer' element={<RetailerPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shoppingcart' element={<ShoppingCart/>}/>
      <Route path='/signup'element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/seller' element={<SellerPanel/>}/>
      <Route path='/upload' element={<ProductUpload/>}/>
      <Route path='/buysection/:id' element={<Buysection/>}/>
      <Route path='/trial' element={<Trial/>}/>
      


    </Routes>
      </BrowserRouter>
      
    
    </>
  );
}

export default App;
