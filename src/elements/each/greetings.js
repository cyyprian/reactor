const name = "greetings";

export const payload = null;

export const implementation = (greeting, element) => {
    setTimeout(() => element.wasSuccess({ payload: greeting }), 1500);
};

export default name;
