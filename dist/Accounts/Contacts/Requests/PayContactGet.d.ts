import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayContact } from "./PayContact";
/**
 * Gets details of the specified {@link Contact}.
 */
export declare class PayContactGet extends PayContact implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Contact} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayContactGet.d.ts.map