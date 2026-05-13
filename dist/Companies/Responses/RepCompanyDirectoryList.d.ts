import { codified, Company, CompanyDirectory, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link companyDirectories}.
 */
export declare abstract class RepCompanyDirectoryList extends ReplySyncListPiece<CompanyDirectory> {
    /**
     * The list of requested {@link CompanyDirectory}s.
     */
    companyDirectories: CompanyDirectory[] | nothing;
    constructor(json: JsonObject);
    getList(): CompanyDirectory[];
    protected _createBlank(): Company;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepCompanyDirectoryListByCompany extends RepCompanyDirectoryList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, CompanyDirectory], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyDirectoryList.d.ts.map