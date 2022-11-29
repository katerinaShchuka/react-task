import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryT } from "../types/countries";

export type CartState = {
  countries: CountryT[];
};

const initialState: CartState = {
  countries: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CountryT>) => {
      state.countries.push(action.payload);
    },

    remove: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.name.official !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;

export const { add, remove } = cartSlice.actions;
