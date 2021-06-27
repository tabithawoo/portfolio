import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import App from "./App";
import "./fonts/Tajawal/stylesheet.css";

// Theme
let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#BAEED3",
      main: "#76DDA8",
      dark: "#1E7046",
      contrastText: "#f3ddd5",
    },
    background: {
      default: "#FFFFF9",
    },
    text: {
      secondary: "#FFFFF9",
    },
  },
  typography: {
    fontFamily: [
      "Tajawal",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "0em",
    },
    h2: {
      fontWeight: 400,
    },
    h4: {
      fontWeight: 500,
      letterSpacing: "0.1em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: 300,
      fontSize: "1.2rem",
      lineHeight: 1.2,
    },
  },
});

theme = responsiveFontSizes(theme);

// GraphQL
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

// Render
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
