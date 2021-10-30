import { configureStore } from "@reduxjs/toolkit";
import countyCardReducer from "../Components/countyCardSlice"

export const store = configureStore({
    reducer: {
        filterCounty: countyCardReducer,
    },
});