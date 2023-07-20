import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    servicePointList: null,
    selectedServicePoint: null,
}

export const servicePointSlice = createSlice({
    name: 'servicePoint',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.servicePointList = action.payload
        },
        setSelectedServicePoint: (state, action) => {
            state.selectedServicePoint = action.payload
        }
    },
})


export const { setFormData, setSelectedServicePoint } = servicePointSlice.actions
export const servicePointList = (state) => state.servicePoint.servicePointList
export const selectedServicePoint = (state) => state.servicePoint.selectedServicePoint

export default servicePointSlice.reducer