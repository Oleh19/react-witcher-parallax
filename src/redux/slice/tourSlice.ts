import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};

interface CartSliceState {
  tourPrice: number;
  tours: CartItem[];
}

const initialState: CartSliceState = {
  tourPrice: 0,
  tours: [],
};

const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const cartTour = createSlice({
  name: 'cartTour',
  initialState,
  reducers: {
    addTour(state, action: PayloadAction<CartItem>) {
      const findItem = state.tours.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.tours.push({
          ...action.payload,
          count: 1,
        });
      }

      state.tourPrice = calcTotalPrice(state.tours);
    },

    minusTour(state, action: PayloadAction<number>) {
      const findItem = state.tours.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count > 0 && findItem.count--;
      }

      state.tourPrice = calcTotalPrice(state.tours);
    },

    removeTour(state, action: PayloadAction<number>) {
      state.tours.filter((obj) => obj.id !== action.payload);
    },

    clearTour(state) {
      state.tours = [];
    },
  },
});

export const { addTour, minusTour, removeTour, clearTour } = cartTour.actions;

export default cartTour.reducer;
