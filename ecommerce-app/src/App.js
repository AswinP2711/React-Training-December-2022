import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductMenu from "./components/productMenu";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { productContext } from "./components/ProductContext";

function App() {
  const products = [
    {
      id: 1,
      Name: "Nokia 6.1 Plus",
      Ram: "4 GB",
      Rom: "64 GB",
      Quantity: 1,
      Amount: "15999",
      image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-61-plus-2.jpg",
    },
    {
      id: 2,
      Name: "Samsung Galaxy M33",
      Ram: "8 GB",
      Rom: "128 GB",
      Quantity: 1,
      Amount: "17999",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzbpins/gallery/in-galaxy-m33-5g-6gb-ram-sm-m336bzbpins-531839740?$730_584_PNG$",
    },
    {
      id: 3,
      Name: "Realme 10 Pro",
      Ram: "6 GB",
      Rom: "128 GB",
      Quantity: 1,
      Amount: "15999",
      image:
        "https://image01.realme.net/general/20221125/1669370386746.png.webp",
    },
    {
      id: 4,
      Name: "Infix Zero Ultra",
      Ram: "8 GB",
      Rom: "256 GB",
      Quantity: 1,
      Amount: "34999",
      image: "https://www.addmecart.com/wp-content/uploads/2022/12/890-1.png",
    },
    {
      id: 5,
      Name: "POCO C31",
      Ram: "4 GB",
      Rom: "64 GB",
      Quantity: 1,
      Amount: "9499",
      image:
        "https://www.reliancedigital.in/medias/Realme-C31-Mobile-Phones-492849900-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3ODY1MHxpbWFnZS9qcGVnfGltYWdlcy9oNTMvaDA1Lzk4ODIxMDczNDY5NzQuanBnfDk1Y2ViYTJlZjcyZDAwNDc2NTQzYTFiNmIyM2ZhNTA5MGMxYzk3ZDk4NzMyNTgyNDI3ZTJkZWY2M2EzZmZiOGM",
    },
    {
      id: 6,
      Name: "Apple iPhone 11 Pro Max",
      Ram: "4 GB",
      Rom: "256 GB",
      Quantity: 1,
      Amount: "139999",
      image:
        "https://cdn.shopify.com/s/files/1/0083/6380/2720/products/35_1_5a619c1f-1d2b-485a-8c83-fe49551bf3e8.jpg?v=1656510690",
    },
  ];

  const [show, setShow] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const [cart, setCart] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleAddToCart = () => {
    setShow(false);
    if (cart.some((item) => item.id === selectedProduct.id)) {
      alert("Item already added in cart!!!");
    } else {
      setCart([...cart, selectedProduct]);
    }
  };

  const removeFromCart = (productId) =>{ 
    setCart(cart.filter(items=>items.id!==productId));
    console.log(cart);
  }

  const incrementQuantity = (productId) =>{
    const prod=cart.find(item => item.id === productId)
    prod.Quantity=prod.Quantity+1; 
    setCart([... cart])
    console.log(cart);
  } 

  const decrementQuantity = (productId) =>{ 
    const prod=cart.find(item => item.id === productId)
    if (prod.Quantity>1) {
      prod.Quantity=prod.Quantity-1; 
    }
    setCart([... cart])
    console.log(cart);
  }
  return (
    <React.Fragment>
      <productContext.Provider
        value={{
          products,
          show,
          setShow,
          selectedProduct,
          setSelectedProduct,
          cart,
          setCart,
          handleClose,
          handleShow,
          handleAddToCart,
          removeFromCart,
          incrementQuantity,
          decrementQuantity
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-menu" element={<ProductMenu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </productContext.Provider>
    </React.Fragment>
  );
}

export default App;
