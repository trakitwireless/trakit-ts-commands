import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayUser } from "./PayUser";
/**
 * Gets details of the specified {@link UserAdvanced}.
 */
export declare class PayUserAdvancedGet extends PayUser implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserAdvancedGet.d.ts.map