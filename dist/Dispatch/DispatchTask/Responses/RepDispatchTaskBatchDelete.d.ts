import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link dispatchTask}.
 */
export declare class RepDispatchTaskBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link DispatchTask}.
     */
    dispatchTasks: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepDispatchTaskBatchDelete.d.ts.map