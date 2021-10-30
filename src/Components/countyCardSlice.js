import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:51}
};

export const countyCardSlice = createSlice({
    name: 'filterCounty',
    initialState,
    reducers: {
        filteredCountyFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredCountyTo: (state,action) => {
            state.grantsTo.value = action.payload;
        }
    }
})


export const { filteredCountyFrom, filteredCountyTo } = countyCardSlice.actions

export default countyCardSlice.reducer;
