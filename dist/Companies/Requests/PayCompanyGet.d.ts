import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
/**
 * Gets details of the specified {@link Company}.
 */
export declare class PayCompanyGet extends PayCompany implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Company} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyGet.d.ts.map