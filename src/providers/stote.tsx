"use client";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import React from "react";

export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
