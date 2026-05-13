import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";
/**
 * Gets details of the specified {@link MaintenanceSchedule}.
 */
export declare class PayMaintenanceScheduleGet extends PayMaintenanceSchedule implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link MaintenanceSchedule} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceScheduleGet.d.ts.map