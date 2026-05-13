import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link userGroup}.
 */
export declare class RepUserGroupDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link UserGroup}.
     */
    userGroup: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGroupDelete.d.ts.map