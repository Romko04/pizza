import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        count: 0,
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes===action.payload.sizes
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
        plusItem:(state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes===action.payload.sizes
            })
            if (isItem) {
                isItem.count++
                state.count++
                state.totalPrice += isItem.price       
            } 
            
        },
        minusItem:(state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes===action.payload.sizes
            })
            if (isItem) {
                isItem.count--
                state.count--
                state.totalPrice -= isItem.price          
            } 
            
        },
        clearItems:(state) => {
            state.items = []
            state.count = 0
            state.totalPrice = 0
        },
        removeItem:(state, action) => {
            let isItem = state.items.find(item => {
                return item.id === action.payload.id && item.categories === action.payload.categories && item.sizes===action.payload.sizes
            })
            if (isItem) {
                state.count -= isItem.count
                state.totalPrice -= (isItem.price *isItem.count)         
            } 
            state.items = state.items.filter(item => {
                return item.id !== action.payload.id || item.categories !== action.payload.categories || item.sizes!==action.payload.sizes
            })
        },
        
    }
})
export const selectCart = (state)=> state.cart
export const {addItem,plusItem,minusItem,clearItems,removeItem} = cartSlice.actions
export default cartSlice.reducer