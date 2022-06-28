import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectElementByName } from "./elementsSlice";
import loader from "./loader";
import * as implementations from "../elements/implementations";

function useElement(name) {
    const dispatch = useDispatch();

    const element = useSelector((state) => selectElementByName(state, name));

    const loadElement = useCallback(
        (...parameters) => {
            dispatch(loader(name, implementations[name], ...parameters));
        },
        [name, dispatch]
    );

    return [element, loadElement];
}

export default useElement;
