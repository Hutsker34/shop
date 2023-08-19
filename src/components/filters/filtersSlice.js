import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    lowPrice: 0,
    highPrice: 0,
    productColor:[],
    productType: [],
    
};


export const filtersSlice= createSlice({
    name: "filters",
    initialState,
    reducers: {
        getlowPrice: (state, action) => {
            state.lowPrice = action.payload
        },
        getHighPrice: (state, action) => {
            state.highPrice = action.payload
        },
        getProductColor: (state, action) => {
            state.productColor = action.payload
        },
        getProductType: (state, action) => {
            state.productType = action.payload
        },
        
    }
})

export const { getSearchValue, getlowPrice, getHighPrice,getProductColor ,getProductType } = filtersSlice.actions;

export default filtersSlice.reducer;