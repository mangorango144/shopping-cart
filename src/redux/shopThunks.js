import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(`HTTP error: Status ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
