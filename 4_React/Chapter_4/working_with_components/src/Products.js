import React, { Component } from 'react';
import Product from './Product';
class Products extends Component {
    products;
    constructor(props) {
        super(props);
        this.products = this.getProducts();
    }
    getProducts() { // responsible for returning a list of products
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1", //to render a random image
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }];
    }
    render() {      // We pass in this function into map which loops through each element, calls the function that returns a
                    // <Product /> component for each product, and we are returned a new array of Product components
                    //  which we assign to listProducts.
        const listProducts = this.products.map((product) =>
            <Product key={product.productName} data={product} />
        );
        return (
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}
export default Products; 