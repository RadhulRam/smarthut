import './App.css';
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginPage/Login";
import ProductPage from "./Components/ProductPage/ProductPage";
import Signup from "./Components/Signup/Signup";
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Ckeckout/Checkout';
import CHome from './Components/C-Home/CHome';
import CShop from './Components/C-Shop/CShop';
import CCart from './Components/C-Cart/CCart';
import CProductPage from './Components/C-ProductPage/CProductPage';
import Admin from './Components/Admin/Admin';
import AdminDashboard from './Components/Admin-Dashboard/AdminDashboard';
import AdminAddProducts from './Components/Admin-AddProducts/AdminAddProducts';
import Users from './Components/Users/Users';
import AdminOrders from './Components/Admin-Orders/AdminOrders';
import COrders from './Components/C-Oreders/COrders';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/product-details/:id" element={<ProductPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/client-checkout' element={<Checkout/>}/>
          <Route path="/client-home" element={<CHome/>}/>
          <Route path='/client-shop' element={<CShop/>}/>
          <Route path="/client-cart" element={<CCart/>}/>
          <Route path="/client-order-details" element={<COrders/>}/>
          <Route path="/client-product-details/:id" element={<CProductPage/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin-add-products" element={<AdminAddProducts/>}/>
          <Route path="/admin-users" element={<Users/>}/>
          <Route path="/admin-orders" element={<AdminOrders/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
