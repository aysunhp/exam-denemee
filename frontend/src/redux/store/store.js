import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./../slice/mealSlice";

export default configureStore({
  reducer: {
    meal: mealReducer,
  },
});
