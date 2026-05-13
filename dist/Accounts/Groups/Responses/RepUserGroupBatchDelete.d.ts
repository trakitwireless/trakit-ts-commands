import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link userGroup}.
 */
export declare class RepUserGroupBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link UserGroup}.
     */
    userGroups: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getResults(): ContentIdDeleted[];
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepUserGroupBatchDelete.d.ts.map