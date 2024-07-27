import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface EnvState {
  value: Boolean;
}

// Define the initial state using that type
const initialState: EnvState = {
  value: process.env.NODE_ENV === "production" ? true : false,
};

export const envSlice = createSlice({
  name: "environment",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    checkEnv: (state) => {
      state.value = false;
    },
  },
});

export const { checkEnv } = envSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.environment.value;

export default envSlice.reducer;
