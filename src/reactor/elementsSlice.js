import { createSlice, createSelector } from "@reduxjs/toolkit";

import elements from "./elements";

const updateElement = (state, action) => {
    const name = action.type.split("/")[1];

    for (const [key, value] of Object.entries(action.payload))
        state[name][key] = value;
};

const elementsSlice = createSlice({
    name: "elements",
    initialState: elements,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/loading"),
                (state, action) => {
                    updateElement(state, action);
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/loaded"),
                (state, action) => {
                    updateElement(state, action);
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/failed"),
                (state, action) => {
                    updateElement(state, action);
                }
            );
    },
});

const selectState = (state) => state.elements;

export const selectElementByName = (state, name) => selectState(state)[name];

export function makeSelectElementsByNames() {
    const selectElementsByNames = createSelector(
        [selectState, (state, names) => names],
        (elements, names) => {
            const result = { elements: {}, status: null };

            names.forEach((name) => {
                result.elements[name] = {
                    status: elements[name].status,
                    code: elements[name].code,
                    message: elements[name].message,
                };

                if (elements[name].status === "loading")
                    result.status = "loading";

                if (
                    result.status !== "loading" &&
                    elements[name].status === "failed"
                )
                    result.status = "failed";
            });

            return result;
        }
    );

    return selectElementsByNames;
}

export default elementsSlice.reducer;
