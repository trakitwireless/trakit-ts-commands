import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayReportTemplate } from "./PayReportTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ReportTemplate}.
 */
export declare class PayReportTemplateGet extends PayReportTemplate implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ReportTemplate} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportTemplateGet.d.ts.map