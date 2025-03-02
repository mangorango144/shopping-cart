import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./shopThunks";

const getValidJSON = (key, fallback) => {
  const value = sessionStorage.getItem(key);
  return value && value !== "undefined" ? JSON.parse(value) : fallback;
};

const initialState = {
  products: null,
  loading: true,
  error: null,
  cart: getValidJSON("cart", []),
  cartQuantities: getValidJSON("cartQuantities", {}),
  delivery: getValidJSON("delivery", { name: "collect", cost: 0 }),
  selectedServices: getValidJSON("selectedServices", {
    care_package: { cost: 10, selected: false },
    environment_friendly: { cost: 2, selected: false },
    golden_guard: { cost: 5, selected: false },
  }),
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCartQuantities: (state, action) => {
      state.cartQuantities = action.payload;
      sessionStorage.setItem(
        "cartQuantities",
        JSON.stringify(state.cartQuantities)
      );
    },
    setDelivery: (state, action) => {
      state.delivery = action.payload;
      sessionStorage.setItem("delivery", JSON.stringify(state.delivery));
    },
    setSelectedServices: (state, action) => {
      state.selectedServices = action.payload;
      sessionStorage.setItem(
        "selectedServices",
        JSON.stringify(state.selectedServices)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setCart, setCartQuantities, setDelivery, setSelectedServices } =
  shopSlice.actions;
export default shopSlice.reducer;
