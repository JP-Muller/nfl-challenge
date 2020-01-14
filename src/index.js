import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

