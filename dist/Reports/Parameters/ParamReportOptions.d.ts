import { JsonObject, nothing, ReportFilterMode, ReportParameter } from "@trakit/objects";
import { ParamMerge } from "../../API/Requests/Parameters/ParamMerge";
import { ParamReportScorecardRules } from "./ParamReportScorecardRules";
/**
 * Parameters used to create or update an {@link ReportResult}.
 */
export declare class ParamReportOptions extends ParamMerge {
    /**
     * Creates a new instance of ParamReportOptions from the provided JSON.
     * @param json The JSON to parse.
     * @returns
     */
    static fromJSON(json?: JsonObject): ParamReportOptions | nothing;
    parameters: ReportParameter[] | nothing;
    targets: string | nothing;
    filtering: ReportFilterMode | nothing;
    places: string | nothing;
    regions: string[] | nothing;
    scorecardRules: ParamReportScorecardRules | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportOptions.d.ts.map