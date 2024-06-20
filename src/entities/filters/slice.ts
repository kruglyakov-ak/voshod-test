import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@/shared/redux";
import { Option } from "@/shared/ui/multiple-selector";

export interface FiltersState {
  brands: Option[];
  models: Option[];
  tarifs: Option[];
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
    setBrands: (state: FiltersState, action: PayloadAction<Option[]>) => {
      state.brands = action.payload;
    },
    setModels: (state: FiltersState, action: PayloadAction<Option[]>) => {
      state.models = action.payload;
    },
    setTarifs: (state: FiltersState, action: PayloadAction<Option[]>) => {
      state.tarifs = action.payload;
    },
  },
});

export const { setBrands, setTarifs, setModels } = filtersSlice.actions;

export default filtersSlice.reducer;
