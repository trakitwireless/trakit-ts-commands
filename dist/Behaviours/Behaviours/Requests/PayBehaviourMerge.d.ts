import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamBehaviourMerge } from "./Parameters/ParamBehaviourMerge";
/**
 * Creates a new or updates an existing {@link Behaviour}.
 */
export declare class PayBehaviourMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link Behaviour}.
     */
    behaviour: ParamBehaviourMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourMerge.d.ts.map