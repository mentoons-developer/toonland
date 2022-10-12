import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/scrollToTop";

function Temp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}

export default Temp;
