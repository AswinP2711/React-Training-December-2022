import React from 'react';
import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { productContext } from "./ProductContext";



function ProductMenu() {

  const {
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
  } = React.useContext(productContext); 

  return (
    <Fragment>
      <br />
      <h1>Mobile Phones</h1>
      <br /> 
      <Row xs={1} md={4} className="g-4">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                width="50"
                height="150"
              />
              <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>Ram : {product.Ram}</Card.Text>
                <Card.Text>Rom : {product.Rom}</Card.Text>
                <Card.Title>Amount : {product.Amount}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedProduct(product);
                    handleShow();
                  }}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product Name : {selectedProduct.Name}</Modal.Body>
        <Modal.Body>Amount : {selectedProduct.Amount}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAddToCart();
            }} 
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default ProductMenu;
