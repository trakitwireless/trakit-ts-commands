import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link behaviourScript} object.
 */
export declare abstract class PayBehaviourScript extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link BehaviourScript}.
     */
    behaviourScript: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourScript.d.ts.map