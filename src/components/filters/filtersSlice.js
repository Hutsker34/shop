import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lowPrice: 0,
    highPrice: 500,
    productColor:[],
    productType: [],
    
};


export const filtersSlice= createSlice({
    name: "filters",
    initialState,
    reducers: {
        setlowPrice: (state, action) => {
            state.lowPrice = action.payload
        },
        setHighPrice: (state, action) => {
            if( action.payload == 0){
                state.highPrice = 500
            }else{
                state.highPrice = action.payload
            }
           
        },
        setProductColor: (state, action) => {
            
            
            if(action.payload.checked){
                state.productColor = [...state.productColor,action.payload.id]
            }else{
                state.productColor = state.productColor.filter(item => {
                    return item !== action.payload.id
                })
            }
        },
        setProductType: (state, action) => {
            
            if(action.payload.checked){
                state.productType = [...state.productType,action.payload.id]
            }else{
                state.productType = state.productType.filter(item => {
                    return item !== action.payload.id
                })
            }
        },
        
    }
})

export const {  setlowPrice, setHighPrice,setProductColor ,setProductType } = filtersSlice.actions;

export default filtersSlice.reducer;