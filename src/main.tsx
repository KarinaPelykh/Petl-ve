import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store/store.ts";

import { ToastContainer } from "react-toastify";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Missing type declarations for redux-persist integration react
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </BrowserRouter>,
);
