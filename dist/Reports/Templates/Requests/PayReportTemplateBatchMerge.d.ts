import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";
/**
 *
 */
export declare class PayReportTemplateBatchMerge extends Payload {
    /**
     *
     */
    reportTemplates: ParamReportTemplateMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportTemplateBatchMerge.d.ts.map