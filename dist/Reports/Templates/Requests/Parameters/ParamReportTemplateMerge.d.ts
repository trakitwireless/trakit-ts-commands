import { JsonObject, nothing, ReportType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamReportOptions } from "../../../Parameters/ParamReportOptions";
/**
 * Parameters used to create or update an {@link ReportTemplate}.
 */
export declare class ParamReportTemplateMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    company: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    kind: ReportType | nothing;
    options: ParamReportOptions | nothing;
    fill: string | nothing;
    stroke: string | nothing;
    graphic: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamReportTemplateMerge.d.ts.map