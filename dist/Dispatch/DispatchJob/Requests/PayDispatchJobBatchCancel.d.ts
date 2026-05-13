import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Cancels multiple existing {@link DispatchJob}s, removing them from the dispatcher's and driver's views.
 */
export declare class PayDispatchJobBatchCancel extends PayDispatchJobSpecial {
    /**
     * List of {@link DispatchJob}s to update or create.
     */
    dispatchJobs: ParamDispatchJobCancel[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobBatchCancel.d.ts.map