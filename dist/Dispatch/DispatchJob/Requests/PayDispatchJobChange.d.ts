import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Reply } from "../../../API/Responses/Reply";
import { ParamDispatchJobChange } from "./Parameters/ParamDispatchJobChange";
import { PayDispatchJobSpecial } from "./PayDispatchJob";
/**
 * Completes or modifies an existing {@link DispatchJob} from a driver's perspective.
 * This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
 */
export declare class PayDispatchJobChange extends PayDispatchJobSpecial implements IPaySingle {
    /**
     * Parameters given to create or update a {@link DispatchJob}.
     */
    dispatchJob: ParamDispatchJobChange;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchJobChange.d.ts.map