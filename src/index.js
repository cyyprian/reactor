import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import reactorPrerequisites from "./app/reactorPrerequisites";
import store from "./app/store";
import App from "./App";

reactorPrerequisites();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
