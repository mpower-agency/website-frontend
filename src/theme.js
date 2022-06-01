import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3058A7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#B0D2EB",
      contrastText: "#000000",
    },
    footer: {
      main: "#CADEEC",
      contrastText: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontSize: 34,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: 32,
    },

    text1: {
      fontFamily: "Montserrat",
      fontSize: 20,
    },

    text2: {
      fontFamily: "Montserrat",
      fontSize: 18,
    },

    text3: {
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: "bold",
    },

    sub:{
      fontFamily: "Montserrat",
      fontSize: 16,
    }
  },
});

export default theme;
