import { createSlice } from "@reduxjs/toolkit";

import elements from "./elements";

const elementsSlice = createSlice({
    name: "elements",
    initialState: elements,
    reducers: {},
});

export default elementsSlice.reducer;
