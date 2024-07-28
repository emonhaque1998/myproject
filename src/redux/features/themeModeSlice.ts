import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { setThemeCookie } from "@/actions/theme";

export interface ThemeState {
  value: Boolean;
}

const initialState: ThemeState = {
  value: true,
};

export const themeModSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setTheme } = themeModSlice.actions;
export const getThemeMod = (state: RootState) => state.theme.value;
export default themeModSlice.reducer;
