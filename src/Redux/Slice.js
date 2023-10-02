import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const API = createAsyncThunk(
  "call",
  async (item, { rejectWithValue }) => {
    let result = await fetch(
      "https://651969ca818c4e98ac605828.mockapi.io/User",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      }
    );
    try {
      let data = await result.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Slice = createSlice({
  name: "bh",
  initialState: {
    data: []
  },
  isLoading: false,
  isError: false,
  
  extraReducers: (builder) => {
    builder.addCase(API.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(API.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(API.rejected, (state, action) => {
      state.isLoading = true;
    });
  }
});
export default Slice.reducer;
