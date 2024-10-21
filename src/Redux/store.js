import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./tourSlice";

export const store = configureStore({
  reducer: {
    tour: tourSlice,
  },
});
