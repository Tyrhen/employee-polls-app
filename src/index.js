import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "../src/utils/reportWebVitals";
import { createRoot } from "react-dom/client";
import "./css/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
