import { Company, CompanyGeneral, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link companyGeneral}.
 */
export declare class RepCompanyGeneralGet extends ReplySyncGetPiece<CompanyGeneral> {
    /**
     * The requested {@link CompanyGeneral}.
     */
    companyGeneral: CompanyGeneral | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Company;
    getObject(): CompanyGeneral;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyGeneralGet.d.ts.map