import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "reset-css";
import "@fontsource-variable/rubik";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
