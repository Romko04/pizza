import { RootState } from './store';
import { createSlice } from "@reduxjs/toolkit";
import { Prices } from '../components/Pizzablock/Pizza';
export type PizzaItem = {
    id: number,
    name: string,
    imageUrl: string,
    categories: string,
    prices: Prices
    price: number,
    sizes: number[],
    count: number
}
interface InitialState {
    items:PizzaItem[],
    count: number,
    totalPrice: number
}
const initialState:InitialState = {
    items: [],
    count: 0,
    totalPrice: 0
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes === action.payload.sizes
            })
            if (isItem) {
                isItem.count++
                state.count++
                state.totalPrice += isItem.price
            } else {
                state.items.push(action.payload)
                state.totalPrice += action.payload.price
                state.count++
            }

        },
        plusItem: (state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes === action.payload.sizes
            })
            if (isItem) {
                isItem.count++
                state.count++
                state.totalPrice += isItem.price
            }

        },
        minusItem: (state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes === action.payload.sizes
            })
            if (isItem) {
                isItem.count--
                state.count--
                state.totalPrice -= isItem.price
            }

        },
        clearItems: (state) => {
            state.items = []
            state.count = 0
            state.totalPrice = 0
        },
        removeItem: (state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes === action.payload.sizes
            })
            if (isItem) {
                state.count -= isItem.count
                state.totalPrice -= (isItem.price * isItem.count)
            }
            state.items = state.items.filter(item => {
                return item.id !== action.payload.id || item.categories !== action.payload.categories || item.sizes !== action.payload.sizes
            })
        },

    }
})
export const selectCart = (state: RootState) => state.cart
export const { addItem, plusItem, minusItem, clearItems, removeItem } = cartSlice.actions
export default cartSlice.reducer