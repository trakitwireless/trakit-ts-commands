import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayFormResult } from "./PayFormResult";
/**
 * Gets details of the specified {@link FormResult}.
 */
export declare class PayFormResultGet extends PayFormResult implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link FormResult} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormResultGet.d.ts.map