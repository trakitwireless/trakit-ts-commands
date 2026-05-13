import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";
/**
 * Creates a new or updates an existing {@link BehaviourScript}.
 */
export declare class PayBehaviourScriptMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link BehaviourScript}.
     */
    behaviourScript: ParamBehaviourScriptMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourScriptMerge.d.ts.map