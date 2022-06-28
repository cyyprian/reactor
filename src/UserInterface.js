import { useEffect } from "react";

import { useElement } from "reactor";
import { asyncTask } from "elements";

function UserInterface() {
    const [elAsyncTask, loadElAsyncTask] = useElement(asyncTask);

    useEffect(() => {
        loadElAsyncTask("Hello world!");
    }, [loadElAsyncTask]);

    return (
        <div className="UserInterface">
            <h1>UserInterface {elAsyncTask.payload}</h1>
        </div>
    );
}

export default UserInterface;
