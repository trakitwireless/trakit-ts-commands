import { codified, Company, CompanyGeneral, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link companyGenerals}.
 */
export declare abstract class RepCompanyGeneralList extends ReplySyncListPiece<CompanyGeneral> {
    /**
     * The list of requested {@link CompanyGeneral}s.
     */
    companyGenerals: CompanyGeneral[] | nothing;
    constructor(json: JsonObject);
    getList(): CompanyGeneral[];
    protected _createBlank(): Company;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepCompanyGeneralListByCompany extends RepCompanyGeneralList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, CompanyGeneral], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyGeneralList.d.ts.map