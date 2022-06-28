import { configureStore } from "@reduxjs/toolkit";

import elementsReducer from "../reactor/elementsSlice";

const store = configureStore({
    reducer: {
        elements: elementsReducer,
    },
});

export default store;
