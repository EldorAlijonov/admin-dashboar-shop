import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './patient/patientSlice';
export const store = configureStore({
    reducer: {
        patient: patientReducer,
    },
})