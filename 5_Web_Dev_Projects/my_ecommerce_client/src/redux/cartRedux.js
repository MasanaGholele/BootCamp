import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        shipping: 0,
        subTotal: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.subTotal += action.payload.price * action.payload.quantity;
            state.shipping = state.subTotal * 0.05;
            state.total = state.subTotal + state.shipping;
        },
        clearCart: (state) => {
            state.quantity = 0;
            state.products = [];
            state.shipping = 0;
            state.subTotal = 0;
            state.total = 0;
        }
    },
});

export const { 
    addProduct, clearCart 
} = cartSlice.actions;
export default cartSlice.reducer;