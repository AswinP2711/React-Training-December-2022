import React from 'react';




class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                name: '',
                price: 0,
                type: '',
            }],
            formProducts: [{
                name: '',
                price: 0,
                type: '',
            }],
            tname:'',
            tprice:'',
            ttype:'',

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);

        fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({ products: json });
                console.log(this.state.products);
            }, () => alert("error"));
    }
    componentDidMount() {
        
            
    }
    // increaseQuantity = (singleProduct) => {
    //     let products = Object.assign([{}], this.state.products);
    //     // products.forEach((product)=>{
    //     //     if(singleProduct.name==product.name){
    //     //         console.log(product.name);
    //     //     }
    //     // });
    //     this.setState(function () {
    //         products.forEach((product) => {
    //             if (singleProduct.name == product.name) {
    //                 product.name = 'fevin';
    //                 console.log("the quantity value:", product.quant);
    //             }
    //         });
    //         return products;
    //     });
    // }
    // if(singleProduct.name==product.name){
    //     console.log(product.quantity=product.quantity+1);
    //     product.quantity=product.quantity+1;
    // }
    handleNameChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState(function(){
            return this.state.tname=e.target.value;
        });
    }
    handlePriceChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState(function(){
            return this.state.tprice=e.target.value;
        });
        
    }
    handleTypeChange = (e) => {
        e.preventDefault();
        console.log(this.state.tname);
        console.log(e.target.value);
        this.setState({formProducts:[{
            name:this.state.tname,
            price:this.state.tprice,
            type:e.target.value
        }]});
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ products: [...this.state.products,...this.state.formProducts ]});
        console.log(this.state.products);
        this.setState({formProducts:[{
            name:'',
            price:'',
            type:''
        }]});
     }
    render() {
        // if (this.state.loaded === true) {
        //     console.log("after loading");
        //     console.log(this.state.products);
        //     this.state.products.map((product) => { product.quant = 1; });
        //     console.log(this.state.products);
        //     this.state.products.map((product) => {
        //         console.log(product.name);
        //     });

        // } else {
        //     console.log("before loading");
        // }
        return (
            <div>
                <h1>Update Product List</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>
                        Enter Product name:<input type="text" name="name" value={this.state.formProducts.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Enter Product Price:<input type="number" name="price" value={this.state.formProducts.price} onChange={this.handlePriceChange}/>
                    </label>
                    <label>
                        Enter Product Type:<input type="text" name="type" value={this.state.formProducts.type} onChange={this.handleTypeChange}/>
                    </label>
                    <input type="submit" />
                </form>
                <h1>Product List</h1>
                <table border={2}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                    </tr>
                {this.state.products.map((product) =>
                    <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.type}</td>
                    </tr>
                )}
                </table>

            </div>
        )
    }
}
{/* <input style={{ width: "15px" }} ></input> */ }
export default ListTable;