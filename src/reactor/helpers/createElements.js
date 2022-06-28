import createElement from "./createElement";

const createElements = (names, payloads) => {
    const elements = {};

    for (const name in names) elements[name] = createElement(payloads[name]);

    return elements;
};

export default createElements;
