import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link maintenanceJob}.
 */
export declare class RepMaintenanceJobBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link MaintenanceJob}.
     */
    maintenanceJobs: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepMaintenanceJobBatchDelete.d.ts.map