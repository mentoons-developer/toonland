import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./underdev/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Temp from "./Temp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Temp />
    </PersistGate>
  </Provider>
);
