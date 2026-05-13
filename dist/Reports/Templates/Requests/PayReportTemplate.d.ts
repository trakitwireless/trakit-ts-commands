import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link reportTemplate} object.
 */
export declare abstract class PayReportTemplate extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ReportTemplate}.
     */
    reportTemplate: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportTemplate.d.ts.map