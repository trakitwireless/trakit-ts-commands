import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayBehaviour } from "./PayBehaviour";
/**
 * Gets details of the specified {@link Behaviour}.
 */
export declare class PayBehaviourGet extends PayBehaviour implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Behaviour} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourGet.d.ts.map