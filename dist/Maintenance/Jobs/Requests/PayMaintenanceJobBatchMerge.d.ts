import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";
/**
 *
 */
export declare class PayMaintenanceJobBatchMerge extends Payload {
    /**
     *
     */
    maintenanceJobs: ParamMaintenanceJobMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceJobBatchMerge.d.ts.map