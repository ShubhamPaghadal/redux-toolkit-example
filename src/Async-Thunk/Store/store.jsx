import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slice/Slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
