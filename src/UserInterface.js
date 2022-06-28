import { useEffect } from "react";

import { useElement } from "reactor";
import { asyncTask, someTask } from "elements";

function UserInterface() {
    const [elAsyncTask, loadElAsyncTask] = useElement(asyncTask);

    const [elSomeTask, loadElSomeTask] = useElement(someTask);

    useEffect(() => {
        loadElAsyncTask("Hello world!");
    }, [loadElAsyncTask]);

    useEffect(() => {
        loadElSomeTask();
    }, []);

    return (
        <div className="UserInterface">
            <h1>UserInterface</h1>
            <h2>{elAsyncTask.payload}</h2>
        </div>
    );
}

export default UserInterface;
