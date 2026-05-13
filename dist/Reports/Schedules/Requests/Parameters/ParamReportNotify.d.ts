import { JsonObject, nothing } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameters used to create or update an {@link ReportSchedule}.
 */
export declare class ParamReportNotify extends ParamMerge {
    /**
     * Creates a new instance of ParamReportNotify from JSON.
     * @param json The JSON to parse.
     * @returns A new instance of ParamReportNotify or null.
     */
    static fromJSON(json?: JsonObject): ParamReportNotify | nothing;
    users: string[] | nothing;
    assets: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportNotify.d.ts.map