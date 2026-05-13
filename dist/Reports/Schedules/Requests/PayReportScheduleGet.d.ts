import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayReportSchedule } from "./PayReportSchedule";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ReportSchedule}.
 */
export declare class PayReportScheduleGet extends PayReportSchedule implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ReportSchedule} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportScheduleGet.d.ts.map