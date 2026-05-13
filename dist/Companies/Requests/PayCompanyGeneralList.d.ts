import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets a list of {@link CompanyGeneral}s.
 */
export declare abstract class PayCompanyGeneralList extends Payload implements IPayDeletable {
    /**
     * When set to true, the full tree of {@link Company|companies} is returned.
     * Otherwise, only the first-level child-{@link Company|companies} are included.
     */
    tree: boolean;
    /**
     * When set to true, the parent {@link Company} is included in the results.
     */
    includeParent: boolean;
    /**
     * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company}.
 */
export declare class PayCompanyGeneralListByCompany extends PayCompanyGeneralList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayCompanyGeneralList.d.ts.map