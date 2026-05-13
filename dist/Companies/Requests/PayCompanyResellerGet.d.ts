import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
/**
 * Gets details of the specified {@link CompanyReseller}.
 */
export declare class PayCompanyResellerGet extends PayCompany implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyResellerGet.d.ts.map