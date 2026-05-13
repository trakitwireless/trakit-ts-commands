import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link maintenanceJob} object.
 */
export declare abstract class PayMaintenanceJob extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link MaintenanceJob}.
     */
    maintenanceJob: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceJob.d.ts.map