import { JsonObject, MaintenanceJob, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link maintenanceJob}.
 */
export declare class RepMaintenanceJobGet extends ReplySyncGet<MaintenanceJob> {
    /**
     * The requested {@link MaintenanceJob}.
     */
    maintenanceJob: MaintenanceJob | nothing;
    constructor(json: JsonObject);
    getObject(): MaintenanceJob;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMaintenanceJobGet.d.ts.map