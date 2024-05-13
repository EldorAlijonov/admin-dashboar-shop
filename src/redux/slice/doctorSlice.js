import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorAdd: {},
    doctorUpdata: {},
    doctorCounter: 0
}

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        doctorPost: (state, action) => {
            state.doctorAdd = action.payload;
        },
        doctorPut: (state, action) => {
            state.doctorUpdata = action.payload;
        },
        doctorCount: (state, action) => {
            state.doctorCounter = action.payload;
        }
    },
})

export const { doctorPost, doctorPut, doctorCount } = doctorSlice.actions;

export default doctorSlice.reducer;