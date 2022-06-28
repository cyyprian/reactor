import * as names from "../elements/index";
import * as payloads from "../elements/payloads";
import * as implementations from "../elements/implementations";

const productionEnv = process.env.NODE_ENV === "production";

const reactorPrerequisites = () => {
    if (productionEnv) return;

    for (const name in names) {
        if (payloads[name] === undefined) {
            throw new Error(
                `Payload for "${name}" does not exist!` +
                    ` The payload should be defined in "elements/each/${name}.js" and exported through "elements/payloads.js"`
            );
        }

        if (typeof implementations[name] !== "function") {
            console.log(name);
            throw new Error(
                `Implementation for "${name}" does not exist!` +
                    ` The implementation should be defined in "elements/each/${name}.js" and exported through "elements/implementations.js"`
            );
        }
    }
};

export default reactorPrerequisites;
