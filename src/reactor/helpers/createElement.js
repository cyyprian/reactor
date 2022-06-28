import model from "./model";

const createElement = (payload, status = null) =>
    model.modelOf(status, { payload });

export default createElement;
