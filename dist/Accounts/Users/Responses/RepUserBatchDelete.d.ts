import { email, JsonObject, ulong } from "@trakit/objects";
import { ContentLoginDeleted } from "../../../API/Responses/Content/ContentLoginDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link user}.
 */
export declare class RepUserBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link User}.
     */
    users: ContentLoginDeleted[];
    constructor(json: JsonObject);
    protected _getKeys(): email[];
    getCompanyId(): ulong;
    getResults(): ContentLoginDeleted[];
}
//# sourceMappingURL=RepUserBatchDelete.d.ts.map