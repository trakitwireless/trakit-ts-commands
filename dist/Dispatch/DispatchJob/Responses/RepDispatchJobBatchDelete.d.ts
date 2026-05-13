import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link dispatchJob}.
 */
export declare class RepDispatchJobBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link DispatchJob}.
     */
    dispatchJobs: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepDispatchJobBatchDelete.d.ts.map