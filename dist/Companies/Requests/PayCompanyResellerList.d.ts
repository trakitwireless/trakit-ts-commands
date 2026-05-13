import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets a list of {@link CompanyReseller}s.
 */
export declare abstract class PayCompanyResellerList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link CompanyReseller}s for the specified {@link Company}.
 */
export declare class PayCompanyResellerListByCompany extends PayCompanyResellerList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyResellerList.d.ts.map