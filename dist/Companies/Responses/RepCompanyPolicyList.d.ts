import { codified, Company, CompanyPolicy, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link companyPolicies}.
 */
export declare abstract class RepCompanyPolicyList extends ReplySyncListPiece<CompanyPolicy> {
    /**
     * The list of requested {@link CompanyPolicy}s.
     */
    companyPolicies: CompanyPolicy[] | nothing;
    constructor(json: JsonObject);
    getList(): CompanyPolicy[];
    protected _createBlank(): Company;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepCompanyPolicyListByCompany extends RepCompanyPolicyList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, CompanyPolicy], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyPolicyList.d.ts.map