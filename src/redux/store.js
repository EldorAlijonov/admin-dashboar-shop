import { configureStore } from '@reduxjs/toolkit'
import patientReducer from "./slice/patientSlice";
import doctorReducer from "./slice/doctorSlice"
export const store = configureStore({
    reducer: {
        patient: patientReducer,
        doctor: doctorReducer
    },
})