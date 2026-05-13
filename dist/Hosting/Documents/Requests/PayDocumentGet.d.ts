import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayDocument } from "./PayDocument";
/**
 * Gets details of the specified {@link Document}.
 */
export declare class PayDocumentGet extends PayDocument implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Document} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDocumentGet.d.ts.map