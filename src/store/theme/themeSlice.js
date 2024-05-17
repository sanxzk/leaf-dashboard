import { createSlice } from "@reduxjs/toolkit";

const darkColors = {
  primary: "#0F0F0F",
  secondary: "#232D3F",
  tertiary: "#005B41",
  last: "#008170",
  textColor: "white",
};
const lightColors = {
  primary: "#41D1C4",
  secondary: "#F8F9FA",
  tertiary: "#fff",
  last: "#1679AB",
  textColor: "#0000009C",
};

const initialState = {
  mode: "light",
  colors: lightColors,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        state.colors = darkColors;
      } else {
        state.mode = "light";
        state.colors = lightColors;
      }
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
