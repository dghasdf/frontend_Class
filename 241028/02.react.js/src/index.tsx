import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { darkTheme } from "./theme";
import App from "./App";
import App1 from "./App1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App1 />
  </ThemeProvider>
);
