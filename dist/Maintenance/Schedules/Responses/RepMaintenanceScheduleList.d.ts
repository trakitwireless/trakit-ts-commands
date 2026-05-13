import { codified, email, guid, JsonObject, MaintenanceSchedule, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link maintenanceSchedules}.
 */
export declare abstract class RepMaintenanceScheduleList extends ReplySyncList<MaintenanceSchedule> {
    /**
     * The list of requested {@link MaintenanceSchedule}s.
     */
    maintenanceSchedules: MaintenanceSchedule[] | nothing;
    constructor(json: JsonObject);
    getList(): MaintenanceSchedule[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepMaintenanceScheduleListByCompany extends RepMaintenanceScheduleList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, MaintenanceSchedule], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMaintenanceScheduleList.d.ts.map