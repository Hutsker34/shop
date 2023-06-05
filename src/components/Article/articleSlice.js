import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  value: 0,
  products: [],
  product: {},
  visible: false,
  orders: [],
  
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      let amount = 1;
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.id) {
          amount++;
          break;
        }
      }
      if (amount > 1) {
        const newState = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1
            };
          } else {
            return item;
          }
        });
        state.products = newState;
      } else {
        state.products = [...state.products, { ...action.payload, amount }];
      }
      
    },
    currentProduct: (state, action) => {
      state.product = action.payload;
      
    },
    currentOrders: (state, action) => {
      state.orders = action.payload;
      console.log('111',action.payload)
    },
    decrement: (state, action) => {
      state.value -= 1;
      let amount = 0 
      
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id == action.payload) {
            amount = state.products[i].amount;
            state.products[i].amount -= 1 
            break;
          }
        }
  
        
        if (amount <= 1) {
          state.products =state.products.filter((item) => {
            return item.id !== action.payload
          })
        }
      
      state.visible = false
      
    },
    openModal: (state) => {
      state.visible = true
    },
    closeModal: (state) => {
      state.visible = false
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
    
  },
);

export const { currentOrders, currentProduct,increment, decrement, incrementByAmount, closeModal , openModal} = articleSlice.actions;

export default articleSlice.reducer;
