import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";
/**
 *
 */
export declare class PayReportResultBatchMerge extends Payload {
    /**
     *
     */
    reportResults: ParamReportResultMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportResultBatchMerge.d.ts.map