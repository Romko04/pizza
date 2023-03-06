import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        pizzas: [],
        category: 0,
        sort: 'rating',
        searchValue: ''
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
        setSearcValue: (state, action) => {
            state.searchValue = action.payload
        },
        setDescription: (state, action) => {
            state.category = Number(action.payload.category)
            state.sort = action.payload.sort
        },
    }
})
export const {setPizzaz, setCategory, setSort, setSearcValue,setDescription} = homeSlice.actions
export default homeSlice.reducer