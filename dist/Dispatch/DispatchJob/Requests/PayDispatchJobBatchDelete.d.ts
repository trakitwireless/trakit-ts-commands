import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Deletes multiple {@link DispatchJob}s.
 */
export declare class PayDispatchJobBatchDelete extends PayDispatchJobSpecial {
    /**
     * List of {@link DispatchJob.id}s to delete.
     */
    dispatchJobs: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobBatchDelete.d.ts.map