import { JsonObject } from "@trakit/objects";
import { nothing, ReportType, Timezone, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "../../../Parameters/ParamReportOptions";
/**
 * Parameters used to create or update an {@link ReportResult}.
 */
export declare class ParamReportResultMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    template: ulong | nothing;
    company: ulong | nothing;
    kind: ReportType | nothing;
    name: string | nothing;
    notes: string | nothing;
    archive: boolean | nothing;
    options: ParamReportOptions | nothing;
    timezone: Timezone | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportResultMerge.d.ts.map