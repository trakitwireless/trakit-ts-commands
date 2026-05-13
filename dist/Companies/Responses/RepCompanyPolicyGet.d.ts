import { Company, CompanyPolicy, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link companyPolicy}.
 */
export declare class RepCompanyPolicyGet extends ReplySyncGetPiece<CompanyPolicy> {
    /**
     * The requested {@link CompanyPolicy}.
     */
    companyPolicy: CompanyPolicy | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Company;
    getObject(): CompanyPolicy;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyPolicyGet.d.ts.map