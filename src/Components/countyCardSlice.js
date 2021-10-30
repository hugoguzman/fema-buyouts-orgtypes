import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:51},
    dollarsFrom: {value:579},
    dollarsTo: {value:441696755},
    propertiesFrom: {value:0},
    propertiesTo: {value:2992},
};

export const countyCardSlice = createSlice({
    name: 'filterCounty',
    initialState,
    reducers: {
        filteredCountyFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredCountyTo: (state, action) => {
            state.grantsTo.value = action.payload;
        },
        filteredCountyDollarsFrom: (state, action) => {
            state.dollarsFrom.value = action.payload;
        },
        filteredCountyDollarsTo: (state, action) => {
            state.dollarsTo.value = action.payload;
        },
        filteredCountyPropsFrom: (state, action) => {
            state.propertiesFrom.value = action.payload;
        },
        filteredCountyPropsTo: (state, action) => {
            state.propertiesTo.value = action.payload;
        }
    }
})


export const { filteredCountyFrom, filteredCountyTo, filteredCountyDollarsFrom, filteredCountyDollarsTo, filteredCountyPropsFrom, filteredCountyPropsTo } = countyCardSlice.actions

export default countyCardSlice.reducer;
