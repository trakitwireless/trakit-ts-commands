import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "../../../Parameters/ParamReportOptions";
import { ParamReportNotify } from "./ParamReportNotify";
import { ParamReportRecurrence } from "./ParamReportRecurrence";
/**
 * Parameters used to create or update an {@link ReportSchedule}.
 */
export declare class ParamReportScheduleMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    template: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    owner: string | nothing;
    enabled: boolean | nothing;
    repetition: ParamReportRecurrence | nothing;
    options: ParamReportOptions | nothing;
    notify: ParamReportNotify | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportScheduleMerge.d.ts.map