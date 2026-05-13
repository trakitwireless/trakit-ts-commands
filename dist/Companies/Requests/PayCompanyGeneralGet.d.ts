import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
/**
 * Gets details of the specified {@link CompanyGeneral}.
 */
export declare class PayCompanyGeneralGet extends PayCompany implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyGeneralGet.d.ts.map