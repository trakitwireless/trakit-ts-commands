import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamBehaviourScriptMerge } from "./Parameters/ParamBehaviourScriptMerge";
/**
 *
 */
export declare class PayBehaviourScriptBatchMerge extends Payload {
    /**
     *
     */
    behaviourScripts: ParamBehaviourScriptMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourScriptBatchMerge.d.ts.map