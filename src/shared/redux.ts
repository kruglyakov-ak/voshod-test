import { buildCreateSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { store } from "@/app/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const createSlice = buildCreateSlice();
