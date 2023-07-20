import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import headerReducer from "./header/headerSlice";
import modalReducer from "./modal/modalSlice";
import servicePointReducer from "./servicePoint/servicePointSlice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      header: headerReducer,
      modal: modalReducer,
      servicePoint: servicePointReducer
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
