import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C6F199",
      contrastText: "#000000",
    },
    footer: {
      main: "#1a2722",
      contrastText: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontSize: 35,
    },

    title: {
      fontFamily: "Lato",
      fontSize: 35,
      fontWeight: 600,
    },

    h2: {
      fontFamily: "Open Sans",
      fontSize: 32,
    },

    h3: {
      fontFamily: "Open Sans",
      fontSize: 25,
    },

    h4: {
      fontFamily: "Montserrat",
      fontSize: 20,
    },

    h5: {
      fontFamily: "Montserrat",
      fontSize: 18,
    },

    navbar: {
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: 500,
    },

    buttons: {
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: 600,
    },

    cardtitle: {
      fontFamily: "Open Sans",
      fontSize: 32,
    },

    name: {
      fontFamily: "Open Sans",
      fontSize: 23,
    },

    nameSub: {
      fontFamily: "Open Sans",
      fontSize: 17,
    },
  },
});

export default theme;
