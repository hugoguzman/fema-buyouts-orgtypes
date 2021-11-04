import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:2},
    dollarsFrom: {value:30952},
    dollarsTo: {value:2540518},
    propertiesFrom: {value:1},
    propertiesTo: {value:7},
};

export const tribalCardSlice = createSlice({
    name: 'filterTribal',
    initialState,
    reducers: {
        filteredTribalFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredTribalTo: (state, action) => {
            state.grantsTo.value = action.payload;
        },
        filteredTribalDollarsFrom: (state, action) => {
            state.dollarsFrom.value = action.payload;
        },
        filteredTribalDollarsTo: (state, action) => {
            state.dollarsTo.value = action.payload;
        },
        filteredTribalPropsFrom: (state, action) => {
            state.propertiesFrom.value = action.payload;
        },
        filteredTribalPropsTo: (state, action) => {
            state.propertiesTo.value = action.payload;
        }
    }
})


export const { filteredTribalFrom, filteredTribalTo, filteredTribalDollarsFrom, filteredTribalDollarsTo, filteredTribalPropsFrom, filteredTribalPropsTo } = tribalCardSlice.actions

export default tribalCardSlice.reducer;
