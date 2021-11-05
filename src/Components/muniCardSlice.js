import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:25},
    dollarsFrom: {value:274},
    dollarsTo: {value:119652131},
    propertiesFrom: {value:0},
    propertiesTo: {value:574},
};

export const muniCardSlice = createSlice({
    name: 'filterMuni',
    initialState,
    reducers: {
        filteredMuniFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredMuniTo: (state, action) => {
            state.grantsTo.value = action.payload;
        },
        filteredMuniDollarsFrom: (state, action) => {
            state.dollarsFrom.value = action.payload;
        },
        filteredMuniDollarsTo: (state, action) => {
            state.dollarsTo.value = action.payload;
        },
        filteredMuniPropsFrom: (state, action) => {
            state.propertiesFrom.value = action.payload;
        },
        filteredMuniPropsTo: (state, action) => {
            state.propertiesTo.value = action.payload;
        }
    }
})


export const { filteredMuniFrom, filteredMuniTo, filteredMuniDollarsFrom, filteredMuniDollarsTo, filteredMuniPropsFrom, filteredMuniPropsTo } = muniCardSlice.actions

export default muniCardSlice.reducer;
