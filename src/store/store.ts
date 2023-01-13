import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blockReducer } from "./reducers/block";

const rootReducer = combineReducers({
  blockReducer,
});

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
