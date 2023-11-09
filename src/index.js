import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./core/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
