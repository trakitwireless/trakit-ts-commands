import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 *
 */
export declare class PayMaintenanceScheduleBatchDelete extends Payload {
    /**
     *
     */
    maintenanceSchedules: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMaintenanceScheduleBatchDelete.d.ts.map