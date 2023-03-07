import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import homeReducer from "./HomeSlice";
export const store = configureStore({
    reducer: {
        home: homeReducer,
        cart: CartSlice,
    }  
})
window.store = store
