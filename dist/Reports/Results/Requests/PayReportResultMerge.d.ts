import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";
/**
 * Creates a new or updates an existing {@link ReportResult}.
 */
export declare class PayReportResultMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ReportResult}.
     */
    reportResult: ParamReportResultMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportResultMerge.d.ts.map