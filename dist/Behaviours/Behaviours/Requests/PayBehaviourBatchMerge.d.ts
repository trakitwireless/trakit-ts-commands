import { JsonObject, nothing } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";
/**
 *
 */
export declare class PayBehaviourBatchMerge extends Payload {
    /**
     *
     */
    behaviours: ParamBehaviourMerge[] | nothing;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourBatchMerge.d.ts.map