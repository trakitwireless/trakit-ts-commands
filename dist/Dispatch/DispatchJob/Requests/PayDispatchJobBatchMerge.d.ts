import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Creates multiple new, or updates multiple existing {@link DispatchJob}s.
 */
export declare class PayDispatchJobBatchMerge extends PayDispatchJobSpecial {
    /**
     * List of {@link DispatchJob}s to update or create.
     */
    dispatchJobs: ParamDispatchJobMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobBatchMerge.d.ts.map