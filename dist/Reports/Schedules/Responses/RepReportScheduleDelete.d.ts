import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link reportSchedule}.
 */
export declare class RepReportScheduleDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ReportSchedule}.
     */
    reportSchedule: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportScheduleDelete.d.ts.map