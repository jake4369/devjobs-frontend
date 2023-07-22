import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./context/FormContext.jsx";
import { ScreenSizeProvider } from "./context/IsMobile";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <ScreenSizeProvider>
          <App />
        </ScreenSizeProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
