import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    searchValue: '',
    filteredProducts: []
};


export const headerSlice= createSlice({
    name: "header",
    initialState,
    reducers: {
        getSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        getFiltredProducts: (state, action) => {
            state.filteredProducts = action.payload
        }
    }
})

export const { getSearchValue, getFiltredProducts } = headerSlice.actions;

export default headerSlice.reducer;