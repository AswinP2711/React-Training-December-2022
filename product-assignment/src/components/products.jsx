import React, { Component } from "react";
import MyForm from "./addProduct";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: [
        {
          "baked beans": 2,
          "hot dogs": 21,
          spam: 20,
          "refried beans": 12,
          "kidney beans": 2,
          "garden peas": 22,
        },
      ],
    };
  }

  increment = (pro) => {
    console.log(pro);
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleSubmit = (formValues) => {
    // e.preventDefault();

    const newProduct = {
      name: formValues.name,
      price: formValues.price,
      type: formValues.type,
    };
    const newProducts = [...this.state.products, newProduct];
    this.setState({products:newProducts})
    // setProducts(newProducts);
    console.log(newProducts);
  };

  componentDidMount() {
    fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    )
      .then((res) => res.json())
      .then(
        (products) => {
          this.setState({ products: products });
        },
        (error) => {
          alert(error);
        }
      );
  }
  render() {
    return (
      <div>
        <MyForm updateProduct={this.handleSubmit}/>
        <h1>Product API</h1>
        <table border={2}>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            {/* <th>Quantity</th>
            <th>Price</th>
            <th></th>
            <th></th> */}
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.type}</td>
                {/* <td>{this.state.quantity[product.name]|0}</td>
                <td></td>
                <td>
                  <button onClick={ ()=>this.increment({name : product.name})}>+</button>
                </td>
                <td>
                  <button onClick={this.decrement}>-</button>
                </td> */}
              </tr>
            ))}
            <tr>
              <td>{this.props.name}</td>
              <td>{this.props.price}</td>
              <td>{this.props.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    if (count === 0) {
      return "Empty";
    } else {
      return count;
    }
  }
}

export default Product;
