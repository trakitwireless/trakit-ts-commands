import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link maintenanceSchedule}.
 */
export declare class RepMaintenanceScheduleBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
     */
    maintenanceSchedules: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepMaintenanceScheduleBatchDelete.d.ts.map