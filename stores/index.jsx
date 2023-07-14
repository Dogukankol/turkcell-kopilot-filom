import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import headerReducer from "./header/headerSlice";
import modalReducer from "./modal/modalSlice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      header: headerReducer,
      modal: modalReducer
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
