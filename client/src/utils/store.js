import { configureStore } from "@reduxjs/toolkit";
import storeReducers from "./storeSlice";

export default configureStore({
  reducer: {
    store: storeReducers,
  },
});
