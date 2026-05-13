import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchTaskMerge } from "./Parameters/ParamDispatchTaskMerge";
/**
 * Creates multiple new, or updates multiple existing {@link DispatchTask}s.
 */
export declare class PayDispatchTaskBatchMerge extends Payload {
    /**
     * List of {@link DispatchTask}s to update or create.
     */
    dispatchTasks: ParamDispatchTaskMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchTaskBatchMerge.d.ts.map