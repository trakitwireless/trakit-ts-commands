import { codified, email, guid, JsonObject, MaintenanceJob, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link maintenanceJobs}.
 */
export declare abstract class RepMaintenanceJobList extends ReplySyncList<MaintenanceJob> {
    /**
     * The list of requested {@link MaintenanceJob}s.
     */
    maintenanceJobs: MaintenanceJob[] | nothing;
    constructor(json: JsonObject);
    getList(): MaintenanceJob[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepMaintenanceJobListByCompany extends RepMaintenanceJobList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, MaintenanceJob], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMaintenanceJobList.d.ts.map