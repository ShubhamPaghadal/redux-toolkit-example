import { createSlice } from "@reduxjs/toolkit";
import { deletUser } from "../ExtraReducer/ExtraReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
    removeUser: (state, action) => {
      const indexToDelete = action.payload;
      // console.log("indexToDelete", indexToDelete);

      state.userList = state.userList.filter(
        (_, index) => index !== indexToDelete
      );
    },

    //Without use ExtraRducer
    // deletUser: (state, action) => {
    //   // console.log(" delet");
    //   return (state = []);
    // },
  },

  extraReducers(builder) {
    builder.addCase(deletUser, () => {
      return [];
    });
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
