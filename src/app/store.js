import { configureStore } from "@reduxjs/toolkit";
import countyCardReducer from "../Components/countyCardSlice"
import muniCardReducer from "../Components/muniCardSlice"

export const store = configureStore({
    reducer: {
        filterCounty: countyCardReducer,
        filteredMuni: muniCardReducer
    },
});