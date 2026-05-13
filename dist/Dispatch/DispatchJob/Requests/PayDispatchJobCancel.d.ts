import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchJobCancel } from "./Parameters/ParamDispatchJobCancel";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Cancels a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
 */
export declare class PayDispatchJobCancel extends PayDispatchJobSpecial implements IPaySingle {
    /**
     * Parameters given to cancel a {@link DispatchJob}.
     */
    dispatchJob: ParamDispatchJobCancel;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobCancel.d.ts.map