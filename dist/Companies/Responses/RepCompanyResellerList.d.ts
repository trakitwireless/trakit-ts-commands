import { codified, Company, CompanyReseller, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link companyResellers}.
 */
export declare abstract class RepCompanyResellerList extends ReplySyncListPiece<CompanyReseller> {
    /**
     * The list of requested {@link CompanyReseller}s.
     */
    companyResellers: CompanyReseller[] | nothing;
    constructor(json: JsonObject);
    getList(): CompanyReseller[];
    protected _createBlank(): Company;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepCompanyResellerListByCompany extends RepCompanyResellerList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, CompanyReseller], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyResellerList.d.ts.map