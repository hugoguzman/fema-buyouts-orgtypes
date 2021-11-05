import { configureStore } from "@reduxjs/toolkit";
import countyCardReducer from "../Components/countyCardSlice"
import muniCardReducer from "../Components/muniCardSlice"
import stateCardReducer from "../Components/stateCardSlice"
import regionalCardReducer from "../Components/regionalCardSlice"
import tribalCardReducer from "../Components/tribalCardSlice"


export const store = configureStore({
    reducer: {
        filterCounty: countyCardReducer,
        filterMuni: muniCardReducer,
        filterState: stateCardReducer,
        filterRegional: regionalCardReducer,
        filterTribal: tribalCardReducer
    },
});