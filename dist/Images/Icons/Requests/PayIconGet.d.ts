import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayIcon } from "./PayIcon";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link Icon}.
 */
export declare class PayIconGet extends PayIcon implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Icon} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayIconGet.d.ts.map