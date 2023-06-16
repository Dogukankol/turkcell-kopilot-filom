import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    product: {}
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {

    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
})

export const getSingleProduct = createAsyncThunk("products/getProduct", async (id) => {

    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        });
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.product = action.payload
        });
    },
})


export default productSlice.reducer