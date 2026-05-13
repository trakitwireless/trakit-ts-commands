import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayUser } from "./PayUser";
/**
 * Gets details of the specified {@link UserGeneral}.
 */
export declare class PayUserGeneralGet extends PayUser implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserGeneralGet.d.ts.map