import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    grantsFrom: {value:1},
    grantsTo: {value:4},
    dollarsFrom: {value:9133},
    dollarsTo: {value:117760209},
    propertiesFrom: {value:0},
    propertiesTo: {value:490},
};

export const stateCardSlice = createSlice({
    name: 'filterState',
    initialState,
    reducers: {
        filteredStateFrom: (state, action) => {
            state.grantsFrom.value = action.payload;
        },
        filteredStateTo: (state, action) => {
            state.grantsTo.value = action.payload;
        },
        filteredStateDollarsFrom: (state, action) => {
            state.dollarsFrom.value = action.payload;
        },
        filteredStateDollarsTo: (state, action) => {
            state.dollarsTo.value = action.payload;
        },
        filteredStatePropsFrom: (state, action) => {
            state.propertiesFrom.value = action.payload;
        },
        filteredStatePropsTo: (state, action) => {
            state.propertiesTo.value = action.payload;
        }
    }
})


export const { filteredStateFrom, filteredStateTo, filteredStateDollarsFrom, filteredStateDollarsTo, filteredStatePropsFrom, filteredStatePropsTo } = stateCardSlice.actions

export default stateCardSlice.reducer;
