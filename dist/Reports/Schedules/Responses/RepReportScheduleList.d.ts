import { codified, email, guid, JsonObject, nothing, ReportSchedule, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link reportSchedules}.
 */
export declare abstract class RepReportScheduleList extends ReplySyncList<ReportSchedule> {
    /**
     * The list of requested {@link ReportSchedule}s.
     */
    reportSchedules: ReportSchedule[] | nothing;
    constructor(json: JsonObject);
    getList(): ReportSchedule[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepReportScheduleListByCompany extends RepReportScheduleList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ReportSchedule], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportScheduleList.d.ts.map