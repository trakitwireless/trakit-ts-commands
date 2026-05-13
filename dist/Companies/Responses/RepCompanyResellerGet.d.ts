import { Company, CompanyReseller, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link companyReseller}.
 */
export declare class RepCompanyResellerGet extends ReplySyncGetPiece<CompanyReseller> {
    /**
     * The requested {@link CompanyReseller}.
     */
    companyReseller: CompanyReseller | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Company;
    getObject(): CompanyReseller;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyResellerGet.d.ts.map