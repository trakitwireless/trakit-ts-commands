import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link reportResult} object.
 */
export declare abstract class PayReportResult extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ReportResult}.
     */
    reportResult: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportResult.d.ts.map