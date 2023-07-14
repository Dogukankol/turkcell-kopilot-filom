import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isVisible: false,
    modalName: "",
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalVisible: (state, action) => {
            state.modalName = action.payload.modalName;
            state.isVisible = action.payload.isVisible;
        }
    },
})


export const { setModalVisible } = modalSlice.actions
export const isVisible = (state) => state.modal.isVisible
export const modalName = (state) => state.modal.modalName

export default modalSlice.reducer