import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import homeReducer from "./HomeSlice";
import PizzasPriceSlice from "./PizzasPriceSlice";
export const store = configureStore({
    reducer: {
        home: homeReducer,
        cart: CartSlice,
        prices: PizzasPriceSlice
    }  
})
window.store = store