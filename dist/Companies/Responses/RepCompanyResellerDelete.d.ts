import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link companyReseller}.
 */
export declare class RepCompanyResellerDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Company}.
     */
    companyReseller: ContentIdParentDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyResellerDelete.d.ts.map