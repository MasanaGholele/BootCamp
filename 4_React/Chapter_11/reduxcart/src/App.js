import { connect } from "react-redux";
import Cart from "./Cart";
function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAddProduct: (productName, productPrice) => dispatch({
            type: "addProduct",
            productData: {
                productName: productName,
                productPrice: productPrice
            }
        }),
        onDeleteProduct: (productData) => dispatch({
            type: "deleteProduct",
            productData: productData
        })
    }
}
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
export default connectedComponent;