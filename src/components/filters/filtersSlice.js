import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    
    
};


export const filtersSlice= createSlice({
    name: "filters",
    initialState,
    reducers: {
        // getSearchValue: (state, action) => {
        //     state.searchValue = action.payload
        // },
        
    }
})

export const { getSearchValue } = filtersSlice.actions;

export default filtersSlice.reducer;