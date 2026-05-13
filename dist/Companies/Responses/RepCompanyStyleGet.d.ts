import { Company, CompanyStyle, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link companyStyle}.
 */
export declare class RepCompanyStyleGet extends ReplySyncGetPiece<CompanyStyle> {
    /**
     * The requested {@link CompanyStyle}.
     */
    companyStyle: CompanyStyle | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Company;
    getObject(): CompanyStyle;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyStyleGet.d.ts.map