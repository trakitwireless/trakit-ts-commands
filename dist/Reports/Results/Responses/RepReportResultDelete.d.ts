import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link reportResult}.
 */
export declare class RepReportResultDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ReportResult}.
     */
    reportResult: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportResultDelete.d.ts.map