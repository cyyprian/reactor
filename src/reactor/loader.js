import { selectElementByName } from "./elementsSlice";
import statuses from "./helpers/statuses";
import model from "./helpers/model";

const elementActionType = (name, status) => "elements/" + name + "/" + status;

const loader =
    (name, implementation, ...parameters) =>
    (dispatch, getState) => {
        const element = selectElementByName(getState(), name);

        function wasFail(props = {}) {
            dispatch({
                type: elementActionType(name, statuses.FAILED),
                payload: model.modelOf(statuses.FAILED, props),
            });
        }

        function wasSuccess(props = {}) {
            dispatch({
                type: elementActionType(name, statuses.LOADED),
                payload: model.modelOf(statuses.LOADED, props),
            });
        }

        dispatch({
            type: elementActionType(name, statuses.LOADING),
            payload: model.modelOf(statuses.LOADING),
        });

        implementation(...parameters, { ...element, wasFail, wasSuccess });
    };

export default loader;
