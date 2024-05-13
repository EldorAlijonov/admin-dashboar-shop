import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    patientAdd: {},
    patientUpdata: {},
    patientCounter: 0
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
        },
        patientCount: (state, action) => {
            state.patientCounter = action.payload;
        }
    },
})

export const { patientPost, patientPut, patientCount } = patientSlice.actions;

export default patientSlice.reducer;