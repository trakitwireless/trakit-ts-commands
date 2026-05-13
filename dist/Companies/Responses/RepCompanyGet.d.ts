import { Company, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link company}.
 */
export declare class RepCompanyGet extends ReplySyncGet<Company> {
    /**
     * The requested {@link Company}.
     */
    company: Company | nothing;
    constructor(json: JsonObject);
    getObject(): Company;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyGet.d.ts.map