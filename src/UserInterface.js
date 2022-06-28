import React from "react";

import { useElement } from "reactor";
import { greetings } from "elements";

function UserInterface({ coreElements }) {
    const [elGreetings] = useElement(greetings);

    if (coreElements.status === "loading")
        return (
            <div className="UserInterface">
                <h1>Loading elements...</h1>
            </div>
        );

    return (
        <div className="UserInterface">
            <h1>{elGreetings.payload}</h1>
        </div>
    );
}

export default UserInterface;
