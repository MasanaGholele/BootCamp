import React, { Component } from "react";
class AddProduct extends Component {
    state = {
        productName: '',
        productPrice: 0
    }
    productNameChangedHandler = (event) => {
        this.setState({ productName: event.target.value });
    }
    productPriceChangedHandler = (event) => {
        this.setState({ productPrice: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={this.productNameChangedHandler}
                    value={this.state.productName}
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    onChange={this.productPriceChangedHandler}
                    value={this.state.productPrice}
                />
                <button className="buttons"
                    onClick={() => {
                        this.props.addProduct(this.state.productName, this.state.productPrice);
                    }}>Add Product</button>
            </div>
        );
    }
};
export default AddProduct;