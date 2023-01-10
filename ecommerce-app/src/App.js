import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductMenu from "./components/productMenu";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { ProductContextProvider } from "./components/ProductContext";

function App() {

  return (
    <React.Fragment>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-menu" element={<ProductMenu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </ProductContextProvider>
    </React.Fragment>
  );
}

export default App;
