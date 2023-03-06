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
            debugger
            let isItem = state.items.find(item => {
                return item.name === action.payload.name && item.categories === action.payload.categories && item.sizes===action.payload.sizes
            })
            if (isItem) {
                debugger
                isItem.count++
                state.count++
                state.totalPrice = state.totalPrice + (isItem.count * isItem.price)           
            } else {
                state.items.push(action.payload)
                state.totalPrice = state.items.reduce((sum, obj)=>{
                    return sum + obj.price
                }, 0)
                state.count++
            }
            
        }
    }
})
export const {addItem} = cartSlice.actions
export default cartSlice.reducer