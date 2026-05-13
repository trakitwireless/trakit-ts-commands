import { JsonObject, nothing, ReportResult, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link reportResult}.
 */
export declare class RepReportResultGet extends ReplySyncGet<ReportResult> {
    /**
     * The requested {@link ReportResult}.
     */
    reportResult: ReportResult | nothing;
    constructor(json: JsonObject);
    getObject(): ReportResult;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportResultGet.d.ts.map