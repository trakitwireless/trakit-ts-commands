import { codified, Company, CompanyStyle, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link companyStyles}.
 */
export declare abstract class RepCompanyStyleList extends ReplySyncListPiece<CompanyStyle> {
    /**
     * The list of requested {@link CompanyStyles}s.
     */
    companyStyles: CompanyStyle[] | nothing;
    constructor(json: JsonObject);
    getList(): CompanyStyle[];
    protected _createBlank(): Company;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepCompanyStyleListByCompany extends RepCompanyStyleList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, CompanyStyle], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyStyleList.d.ts.map