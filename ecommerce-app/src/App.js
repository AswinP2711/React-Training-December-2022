import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductMenu from "./components/productMenu";
import React from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-menu" element={<ProductMenu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
