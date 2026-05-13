import { JsonObject, ReportRecurrenceType, byte, nothing } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameters used to create or update an {@link ReportSchedule}.
 */
export declare class ParamReportRecurrence extends ParamMerge {
    /**
     * Creates a new instance of ParamReportRecurrence from JSON.
     * @param json The JSON to parse.
     * @returns A new instance of ParamReportRecurrence or null.
     */
    static fromJSON(json?: JsonObject): ParamReportRecurrence | nothing;
    kind: ReportRecurrenceType | nothing;
    weekdays: boolean[] | nothing;
    weekday: byte | nothing;
    start: Date | nothing;
    end: Date | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportRecurrence.d.ts.map