const name = "asyncTask";

export const payload = null;

export const implementation = (greeting, element) => {
    setTimeout(() => element.wasSuccess({ payload: greeting }), 1000);
};

export default name;
