import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@/shared/redux";

export interface FiltersState {
  brands: string[];
  models: string[];
  tarifs: string[];
}

const initialState: FiltersState = {
  brands: [],
  models: [],
  tarifs: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    getBrands: (state: FiltersState) => state.brands,
    getModels: (state: FiltersState) => state.models,
    getTarifs: (state: FiltersState) => state.tarifs,
  },
  reducers: {
    setBrands: (state: FiltersState, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
    setModels: (state: FiltersState, action: PayloadAction<string[]>) => {
      state.models = action.payload;
    },
    setTarifs: (state: FiltersState, action: PayloadAction<string[]>) => {
      state.tarifs = action.payload;
    },
  },
});

export const { setBrands, setTarifs, setModels } = filtersSlice.actions;

export default filtersSlice.reducer;
