import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientAdd: {},
    patientUpdata: {},
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        patientPost: (state, action) => {
            state.patientAdd = action.payload;
        },
        patientPut: (state, action) => {
            state.patientUpdata = action.payload;
        }
    },
})

export const { patientPost, patientPut } = patientSlice.actions;

export default patientSlice.reducer;