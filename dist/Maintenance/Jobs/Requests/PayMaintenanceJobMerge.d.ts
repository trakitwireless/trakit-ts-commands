import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";
/**
 * Creates a new or updates an existing {@link MaintenanceJob}.
 */
export declare class PayMaintenanceJobMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link MaintenanceJob}.
     */
    maintenanceJob: ParamMaintenanceJobMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceJobMerge.d.ts.map