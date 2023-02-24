import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  products: [],
  product: {},
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
    decrement: (state, action) => {
      state.value -= 1;

      state.products =state.products.filter((item) => {
        return item.id !== action.payload
      })
    }
    
  },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
);

export const {  currentProduct,increment, decrement, incrementByAmount } = articleSlice.actions;

export default articleSlice.reducer;
