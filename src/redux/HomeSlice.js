import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPizzas = createAsyncThunk(
    'homeSlice/fetchPizzas',
    async (args) => {
        const [category, sort] = args
        let res = await axios.get(`https://6401e590ab6b7399d0af0807.mockapi.io/items?category=${category === 0 ? '' : category}&sortBy=${sort}`)
        return res.data

    }
)
const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        pizzas: [],
        category: 0,
        activeSort: 'rating',
        searchValue: '',
        status: ''

    },
    reducers: {
        setPizzaz: (state, action) => {
            state.pizzas = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSort: (state, action) => {
            state.activeSort = action.payload
        },
        setSearcValue: (state, action) => {
            state.searchValue = action.payload
        },
        setDescription: (state, action) => {
            state.category = Number(action.payload.category)
            state.sort = action.payload.sort
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchPizzas.pending, (state, action) => {
                state.pizzas = []
                state.loading = true
            })
        builder.addCase(
            fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload
                state.status = "success"
                state.loading = false
            })
        builder.addCase(
            fetchPizzas.rejected, (state, action) => {
                console.log('Errror');
                state.status = "error"
                state.pizzas = []
                state.loading = false
            })
    }
})
export const selectHome = (state) => state.home
export const { setPizzaz, setCategory, setSort, setSearcValue, setDescription } = homeSlice.actions
export default homeSlice.reducer