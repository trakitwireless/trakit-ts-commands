import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link reportTemplate}.
 */
export declare class RepReportTemplateBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link ReportTemplate}.
     */
    reportTemplates: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepReportTemplateBatchDelete.d.ts.map