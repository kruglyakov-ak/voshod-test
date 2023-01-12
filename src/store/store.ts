import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export { setupStore };
export type { RootState, AppStore, AppDispatch };
