import { useMemo } from "react";
import { useSelector } from "react-redux";

import { makeSelectElementsByNames } from "./elementsSlice";

function useElementsStatus(names = []) {
    const selectElementsByNames = useMemo(makeSelectElementsByNames, []);

    const elementsByNames = useSelector((state) =>
        selectElementsByNames(state, names)
    );

    return elementsByNames;
}

export default useElementsStatus;
