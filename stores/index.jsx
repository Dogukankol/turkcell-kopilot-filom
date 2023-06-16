import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./blogs/blogSlice";
import productsReducer from "./products/productSlice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      blogs: blogReducer,
      products: productsReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
