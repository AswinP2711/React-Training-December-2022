import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }

  state = {
    count: 0,
  };
  
  componentDidMount(){
    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(res=>res.json())
    .then(
      (products)=>{
        this.setState({products:products});
      },
      (error)=>{
        alert(error);
      }
    )
  }
  render(){
    return (
      <div>
        <h1>Product API</h1>
        <table border={2}>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
          </thead>
          <tbody>
            {this.state.products.map(product=>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
