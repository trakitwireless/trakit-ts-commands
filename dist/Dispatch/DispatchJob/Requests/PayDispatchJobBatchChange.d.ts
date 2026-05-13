import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchJobChange } from "./Parameters/ParamDispatchJobChange";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Completes or modifies multiple existing {@link DispatchJob}s from a driver's perspective.
 */
export declare class PayDispatchJobBatchChange extends PayDispatchJobSpecial {
    /**
     * List of {@link DispatchJob}s to update or create.
     */
    dispatchJobs: ParamDispatchJobChange[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobBatchChange.d.ts.map