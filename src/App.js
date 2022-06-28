import React, { useEffect } from "react";

import { useElementsStatus, useElement } from "reactor";
import { greetings } from "elements";
import UserInterface from "./UserInterface";

function App() {
    const coreElements = useElementsStatus([greetings]);

    const [elGreetings, loadElGreetings] = useElement(greetings);

    useEffect(() => {
        loadElGreetings("Hello world");
    }, [loadElGreetings]);

    return (
        <div className="App">
            <UserInterface coreElements={coreElements} />
        </div>
    );
}

export default App;
