import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link reportTemplate}.
 */
export declare class RepReportTemplateDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ReportTemplate}.
     */
    reportTemplate: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportTemplateDelete.d.ts.map