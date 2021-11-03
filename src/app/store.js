import { configureStore } from "@reduxjs/toolkit";
import countyCardReducer from "../Components/countyCardSlice"
import muniCardReducer from "../Components/muniCardSlice"
import stateCardReducer from "../Components/stateCardSlice"
import regionalCardReducer from "../Components/regionalCardSlice"
import tribalCardReducer from "../Components/tribalCardSlice"


export const store = configureStore({
    reducer: {
        filterCounty: countyCardReducer,
        filteredMuni: muniCardReducer,
        filteredState: stateCardReducer,
        filteredRegional: regionalCardReducer,
        filteredTribal: tribalCardReducer
    },
});