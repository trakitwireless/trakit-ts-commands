import { JsonObject, nothing, ReportSchedule, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link reportSchedule}.
 */
export declare class RepReportScheduleGet extends ReplySyncGet<ReportSchedule> {
    /**
     * The requested {@link ReportSchedule}.
     */
    reportSchedule: ReportSchedule | nothing;
    constructor(json: JsonObject);
    getObject(): ReportSchedule;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportScheduleGet.d.ts.map