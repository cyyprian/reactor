import statuses from "./statuses";

const model = {
    props: Object.freeze({
        status: null,
        code: null,
        message: null,
    }),

    modelOf(status = null, props = {}) {
        switch (status) {
            case null:
                break;
            case statuses.LOADING:
                break;
            case statuses.FAILED:
                break;
            case statuses.LOADED:
                break;
            default:
                throw new Error("Invalid status");
        }

        return { ...this.props, ...props, status };
    },
};

export default model;
