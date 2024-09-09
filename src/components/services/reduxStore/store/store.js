import { configureStore } from "@reduxjs/toolkit";
import buyProductsReducer from '../slice/buyProductsSlice'

const store = configureStore({
    reducer: {
        buyProductsInfo: buyProductsReducer
    }
})

export default store