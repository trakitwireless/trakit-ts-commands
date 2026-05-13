import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link company}.
 */
export declare class RepCompanyDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Company}.
     */
    company: ContentIdParentDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepCompanyDelete.d.ts.map