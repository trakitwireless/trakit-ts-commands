import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportScheduleMerge } from "./Parameters/ParamReportScheduleMerge";
/**
 * Creates a new or updates an existing {@link ReportSchedule}.
 */
export declare class PayReportScheduleMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ReportSchedule}.
     */
    reportSchedule: ParamReportScheduleMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportScheduleMerge.d.ts.map