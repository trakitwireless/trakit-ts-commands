import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
/**
 * Gets details of the specified {@link CompanyStyles}.
 */
export declare class PayCompanyStyleGet extends PayCompany implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link CompanyStyles}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyStyleGet.d.ts.map