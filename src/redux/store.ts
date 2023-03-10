import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import homeReducer from "./HomeSlice";
export const store = configureStore({
    reducer: {
        home: homeReducer,
        cart: CartSlice,
    }  
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch =()=> useDispatch<AppDispatch>()
export default store
