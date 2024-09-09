import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buyProducts: []
}

export const buyProductsSlice = createSlice({
    name: 'buyProducts',
    initialState,
    reducers: {
        setBuyProduct: (state, action) => {
            state.buyProducts = [...state.buyProducts, action.payload]
        },
        deleteBuyProduct: (state, action) => {
            state.buyProducts = state.buyProducts.filter(
                (product, index) => index !== action.payload
            )
        },
        removeAllBuyProducts: (state, action) => {
            state.buyProducts = []
        }
    }
}) 

export const { setBuyProduct, deleteBuyProduct, removeAllBuyProducts } = buyProductsSlice.actions

export default buyProductsSlice.reducer