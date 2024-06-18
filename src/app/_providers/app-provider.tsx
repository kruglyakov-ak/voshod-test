"use client";

import { store } from "@/shared/store";
import React from "react";
import { Provider } from "react-redux";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
