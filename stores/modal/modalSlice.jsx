import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalStatusState: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalVisible: (state, action) => {
            state.modalStatusState = action.payload
        }
    },
})


export const { setModalVisible } = modalSlice.actions
export const modalStatusState = (state) => state.modal.modalStatusState

export default modalSlice.reducer