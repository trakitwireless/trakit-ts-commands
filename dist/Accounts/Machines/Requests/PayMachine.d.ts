import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link machine} object.
 */
export declare abstract class PayMachine extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link Machine}.
     */
    machine: ParamKey;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMachine.d.ts.map