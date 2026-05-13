import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";
/**
 * Creates a new or updates an existing {@link ReportTemplate}.
 */
export declare class PayReportTemplateMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ReportTemplate}.
     */
    reportTemplate: ParamReportTemplateMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportTemplateMerge.d.ts.map