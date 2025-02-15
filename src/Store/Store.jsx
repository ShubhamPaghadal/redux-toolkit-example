import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slice/Userslice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
