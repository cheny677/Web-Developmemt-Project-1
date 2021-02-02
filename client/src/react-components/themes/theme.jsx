import { createMuiTheme } from "@material-ui/core";
import { pink, blue, indigo, cyan, orange } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
      dark: blue[800],
    },
    secondary: {
      main: pink[500],
      light: pink[300],
      dark: pink[800],
    },
    error: {
      main: orange[500],
      light: orange[300],
      dark: orange[800],
    },
    info: {
      main: cyan[500],
      light: cyan[300],
      dark: cyan[800],
    },
    success: {
      main: indigo[500],
      light: indigo[300],
      dark: indigo[800],
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
    shape: { borderRadius: 15 },
  },
});

export default theme;
