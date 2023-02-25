import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};

interface CartSliceState {
  priceWitchers: number;
  witchers: CartItem[];
}

const initialState: CartSliceState = {
  priceWitchers: 0,
  witchers: [],
};

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const cartWitchers = createSlice({
  name: 'cartWitchers',
  initialState,
  reducers: {
    addWitchers(state, action: PayloadAction<CartItem>) {
      const findItem = state.witchers.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.witchers.push({
          ...action.payload,
          count: 1,
        });
      }

      state.priceWitchers = calcTotalPrice(state.witchers);
    },

    minusWitcher(state, action: PayloadAction<number>) {
      const findItem = state.witchers.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count > 0 && findItem.count--;
      }

      state.priceWitchers = calcTotalPrice(state.witchers);
    },

    removeWitchers(state, action: PayloadAction<number>) {
      state.witchers.filter((obj) => obj.id !== action.payload);
    },

    clearWitchers(state) {
      state.witchers = [];
    },
  },
});

export const { addWitchers, minusWitcher, removeWitchers, clearWitchers } = cartWitchers.actions;

export default cartWitchers.reducer;
