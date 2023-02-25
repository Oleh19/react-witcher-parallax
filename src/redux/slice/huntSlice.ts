import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};

interface CartSliceState {
  huntPrice: number;
  hunts: CartItem[];
}

const initialState: CartSliceState = {
  huntPrice: 0,
  hunts: [],
};

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const cartHunt = createSlice({
  name: 'cartHunt',
  initialState,
  reducers: {
    addHunt(state, action: PayloadAction<CartItem>) {

      const findItem = state.hunts.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.hunts.push({
          ...action.payload,
          count: 1,
        });
      }

      state.huntPrice = calcTotalPrice(state.hunts);
    },

    minusHunt(state, action: PayloadAction<number>) {
      const findItem = state.hunts.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count > 0 && findItem.count--;
      }

      state.huntPrice = calcTotalPrice(state.hunts);
    },

    removeHunt(state, action: PayloadAction<number>) {
      state.hunts.filter((obj) => obj.id !== action.payload);
    },

    clearHunt(state) {
      state.hunts = [];
    },
  },
});

export const { addHunt, minusHunt, removeHunt, clearHunt } = cartHunt.actions;

export default cartHunt.reducer;
