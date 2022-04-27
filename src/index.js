import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOMClient from "react-dom/client";
import "./styles/styles.scss";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<App />);

reportWebVitals();
