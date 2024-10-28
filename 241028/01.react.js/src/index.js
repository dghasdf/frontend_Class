import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme={
  background:"#000",
  color:#fff,

}

const light={};

const root = ReactDOM.createRoot(document.getElementById("root"));

<ThemeProvider theme={darkTheme}></ThemeProvider>
root.render(<App />);
