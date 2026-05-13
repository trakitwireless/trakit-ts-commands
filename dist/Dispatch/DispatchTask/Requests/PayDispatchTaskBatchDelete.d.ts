import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Deletes multiple {@link DispatchTask}s.
 */
export declare class PayDispatchTaskBatchDelete extends Payload {
    /**
     * List of {@link DispatchTask.id}s to delete.
     */
    dispatchTasks: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchTaskBatchDelete.d.ts.map