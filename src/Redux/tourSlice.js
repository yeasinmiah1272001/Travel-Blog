import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TourCart: [],
};

export const counterSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addBokking: (state, action) => {
      const existingTour = state.TourCart.find(
        (item) => item.id === action.payload.id
      );
      if (existingTour) {
        existingTour.quantity += 1;
      } else {
        state.TourCart.push({ ...action.payload, quantity: 1 });
      }
    },

    cancel: (state, action) => {
      state.TourCart = state.TourCart.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBokking, cancel } = counterSlice.actions;

export default counterSlice.reducer;
