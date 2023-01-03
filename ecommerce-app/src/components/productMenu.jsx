import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductMenu() {
  const products = [
    {
      Name: "Nokia 6.1 Plus",
      Ram: "4 GB",
      Rom: "64 GB",
      Amount: "15999",
      image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-61-plus-2.jpg",
    },
    {
      Name: "Samsung Galaxy M33",
      Ram: "8 GB",
      Rom: "1284 GB",
      Amount: "17999",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzbpins/gallery/in-galaxy-m33-5g-6gb-ram-sm-m336bzbpins-531839740?$730_584_PNG$",
    },
    {
      Name: "Realme 10 Pro",
      Ram: "6 GB",
      Rom: "18 GB",
      Amount: "15999",
      image:
        "https://image01.realme.net/general/20221125/1669370386746.png.webp",
    },
    {
      Name: "Infix Zero Ultra",
      Ram: "8 GB",
      Rom: "256 GB",
      Amount: "34999",
      image: "https://www.addmecart.com/wp-content/uploads/2022/12/890-1.png",
    },
    {
      Name: "POCO C31",
      Ram: "4 GB",
      Rom: "64 GB",
      Amount: "9499",
      image:
        "https://www.reliancedigital.in/medias/Realme-C31-Mobile-Phones-492849900-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3ODY1MHxpbWFnZS9qcGVnfGltYWdlcy9oNTMvaDA1Lzk4ODIxMDczNDY5NzQuanBnfDk1Y2ViYTJlZjcyZDAwNDc2NTQzYTFiNmIyM2ZhNTA5MGMxYzk3ZDk4NzMyNTgyNDI3ZTJkZWY2M2EzZmZiOGM",
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
  };

  console.log(cart);

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
              setCart(cart.concat(selectedProduct));
              handleAddToCart();
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
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
                <Card.Title>Amount : {item.Amount}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Fragment>
  );
}

export default ProductMenu;
