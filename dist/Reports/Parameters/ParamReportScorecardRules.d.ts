import { double, JsonObject, nothing, ReportScorecardParameter } from "@trakit/objects";
import { ParamMerge } from "../../API/Requests/Parameters/ParamMerge";
/**
 * Parameters used to create or update an {@link ReportResult}.
 */
export declare class ParamReportScorecardRules extends ParamMerge {
    baseScore: double | nothing;
    parameters: ReportScorecardParameter[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportScorecardRules.d.ts.map