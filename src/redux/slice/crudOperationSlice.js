import { createSlice } from "@reduxjs/toolkit";

export const crudOperationSlice = createSlice({
  name: "user",
  initialState: [], // Fix: Use "initialState" instead of "state"
  reducers: {
    addUserData(state, action) {
      state.push(action.payload);
      console.log("action payload", action.payload);
    },
    removeUserData(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
    deleteUserData(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default crudOperationSlice.reducer;
export const { addUserData, removeUserData, deleteUserData } =
  crudOperationSlice.actions;
