import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link maintenanceSchedule}.
 */
export declare class RepMaintenanceScheduleDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
     */
    maintenanceSchedule: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMaintenanceScheduleDelete.d.ts.map