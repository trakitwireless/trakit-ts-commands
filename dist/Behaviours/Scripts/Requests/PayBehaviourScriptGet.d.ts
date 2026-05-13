import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayBehaviourScript } from "./PayBehaviourScript";
/**
 * Gets details of the specified {@link BehaviourScript}.
 */
export declare class PayBehaviourScriptGet extends PayBehaviourScript implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link BehaviourScript} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourScriptGet.d.ts.map