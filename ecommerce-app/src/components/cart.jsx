import React, { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { productContext } from "./ProductContext";

function Cart() {
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
    decrementQuantity,
  } = React.useContext(productContext);

  return (
    <Fragment>
      <h1>Cart</h1>
      <br />
      <Row xs={1} md={4} className="g-4">
        {cart.map((item) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                width="50"
                height="150"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>Ram : {item.Ram}</Card.Text>
                <Card.Text>Rom : {item.Rom}</Card.Text>
                <Card.Text>Quantity : {item.Quantity}</Card.Text>
                <Card.Text>Amount : {item.Amount}</Card.Text>
                <Card.Title>
                  Total Amount : {item.Amount * item.Quantity}
                </Card.Title>
                <Button
                  variant="danger"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  Remove
                </Button>
                <span> </span>
                <Button
                  variant="warning"
                  onClick={() => {
                    incrementQuantity(item.id);
                  }}
                >
                  +
                </Button>
                <span> </span>
                <Button
                  variant="warning"
                  onClick={() => {
                    decrementQuantity(item.id);
                  }}
                >
                  -
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Cart;
