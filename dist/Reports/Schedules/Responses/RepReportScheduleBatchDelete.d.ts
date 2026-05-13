import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link reportSchedule}.
 */
export declare class RepReportScheduleBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link ReportSchedule}.
     */
    reportSchedules: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepReportScheduleBatchDelete.d.ts.map