import { JsonObject, nothing, ReportTemplate, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link reportTemplate}.
 */
export declare class RepReportTemplateGet extends ReplySyncGet<ReportTemplate> {
    /**
     * The requested {@link ReportTemplate}.
     */
    reportTemplate: ReportTemplate | nothing;
    constructor(json: JsonObject);
    getObject(): ReportTemplate;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportTemplateGet.d.ts.map