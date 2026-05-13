import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link maintenanceSchedule} object.
 */
export declare abstract class PayMaintenanceSchedule extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link MaintenanceSchedule}.
     */
    maintenanceSchedule: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceSchedule.d.ts.map