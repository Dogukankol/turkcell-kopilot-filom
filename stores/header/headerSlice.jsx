import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDark: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeaderTheme: (state, action) => {
            state.isDark = action.payload;
        }
    },
})


export const { setHeaderTheme } = headerSlice.actions
export const headerTheme = (state) => state.header.isDark

export default headerSlice.reducer