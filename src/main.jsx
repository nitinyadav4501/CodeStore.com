import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/booksContext.jsx";
import { SearchContextProvider } from "./context/searchContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </SearchContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
