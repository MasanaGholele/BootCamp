import React, { Component } from 'react';
class Products extends Component {
    render() {
        const products = ["Learning React", "Pro React", "Beginning React"];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        return (
            <div>
                <h2>
                    <ul>{listProducts}</ul>                </h2>
            </div>
        );
    }
}
export default Products;