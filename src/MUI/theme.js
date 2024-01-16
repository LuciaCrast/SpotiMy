import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#be9063",
    },
    secondary: {
      main: "#bdbdbd",
    },
    error: {
      main: "#de0f0f",
    },
  },
});
