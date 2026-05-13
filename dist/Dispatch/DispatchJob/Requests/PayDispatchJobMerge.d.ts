import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamDispatchJobMerge } from "./Parameters/ParamDispatchJobMerge";
/**
 * Creates a new or updates an existing {@link DispatchJob}.
 */
export declare class PayDispatchJobMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link DispatchJob}.
     */
    dispatchJob: ParamDispatchJobMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobMerge.d.ts.map