import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    searchValue: '',
};


export const headerSlice= createSlice({
    name: "header",
    initialState,
    reducers: {
        getSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { getSearchValue } = headerSlice.actions;

export default headerSlice.reducer;