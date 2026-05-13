import { JsonObject, MaintenanceSchedule, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link maintenanceSchedule}.
 */
export declare class RepMaintenanceScheduleGet extends ReplySyncGet<MaintenanceSchedule> {
    /**
     * The requested {@link MaintenanceSchedule}.
     */
    maintenanceSchedule: MaintenanceSchedule | nothing;
    constructor(json: JsonObject);
    getObject(): MaintenanceSchedule;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMaintenanceScheduleGet.d.ts.map