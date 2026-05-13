import { Company, CompanyDirectory, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link companyDirectory}.
 */
export declare class RepCompanyDirectoryGet extends ReplySyncGetPiece<CompanyDirectory> {
    /**
     * The requested {@link CompanyDirectory}.
     */
    companyDirectory: CompanyDirectory | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Company;
    getObject(): CompanyDirectory;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyDirectoryGet.d.ts.map