import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchtodo = createAsyncThunk("fetchtodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(response);
  return response.json();
});

const todoslice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchtodo.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchtodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchtodo.rejected, (state, action) => {
      console.log("Error payload", action.payload);
      state.isError = true;
    });
  },
});

export default todoslice.reducer;
