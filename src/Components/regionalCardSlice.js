import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:3},
    dollarsFrom: {value:35228},
    dollarsTo: {value:4309473},
    propertiesFrom: {value:1},
    propertiesTo: {value:129},
};

export const regionalCardSlice = createSlice({
    name: 'filterRegional',
    initialState,
    reducers: {
        filteredRegionalFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredRegionalTo: (state, action) => {
            state.grantsTo.value = action.payload;
        },
        filteredRegionalDollarsFrom: (state, action) => {
            state.dollarsFrom.value = action.payload;
        },
        filteredRegionalDollarsTo: (state, action) => {
            state.dollarsTo.value = action.payload;
        },
        filteredRegionalPropsFrom: (state, action) => {
            state.propertiesFrom.value = action.payload;
        },
        filteredRegionalPropsTo: (state, action) => {
            state.propertiesTo.value = action.payload;
        }
    }
})


export const { filteredRegionalFrom, filteredRegionalTo, filteredRegionalDollarsFrom, filteredRegionalDollarsTo, filteredRegionalPropsFrom, filteredRegionalPropsTo } = regionalCardSlice.actions

export default regionalCardSlice.reducer;
