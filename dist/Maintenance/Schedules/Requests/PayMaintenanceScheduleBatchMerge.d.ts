import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";
/**
 *
 */
export declare class PayMaintenanceScheduleBatchMerge extends Payload {
    /**
     *
     */
    maintenanceSchedules: ParamMaintenanceScheduleMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceScheduleBatchMerge.d.ts.map