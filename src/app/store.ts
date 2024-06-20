import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import filtersSlice from "@/entities/filters/slice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
