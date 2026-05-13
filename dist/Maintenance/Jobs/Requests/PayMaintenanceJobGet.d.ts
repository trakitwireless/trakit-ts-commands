import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayMaintenanceJob } from "./PayMaintenanceJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link MaintenanceJob}.
 */
export declare class PayMaintenanceJobGet extends PayMaintenanceJob implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link MaintenanceJob} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceJobGet.d.ts.map