import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link reportSchedule} object.
 */
export declare abstract class PayReportSchedule extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ReportSchedule}.
     */
    reportSchedule: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayReportSchedule.d.ts.map