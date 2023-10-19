import { createTheme } from '@mui/material/styles';

export const themeOptions= createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00c853',
    },
    secondary: {
      main: '#bdbdbd',
    },
    error: {
      main: '#de0f0f',
    },
  },
});