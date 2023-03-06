import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        pizzas: [],
        category: '',
        sort: ''
    },
    reducers: {
        setPizzaz: (state, action) => {
            state.pizzas = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
    }
})
export const {setPizzaz, setCategory, setSort} = homeSlice.actions
export default homeSlice.reducer