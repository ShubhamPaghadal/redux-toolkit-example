import { configureStore } from "@reduxjs/toolkit";
import crudOperationSlice from "../slice/crudOperationSlice";

const store = configureStore({
  reducer: {
    user: crudOperationSlice,
  },
});

export default store;
