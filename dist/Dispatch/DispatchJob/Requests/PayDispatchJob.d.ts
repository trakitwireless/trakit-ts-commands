import { JsonObject, SyncName } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { ActionType, Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link dispatchJob} object.
 */
export declare abstract class PayDispatchJob extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link DispatchJob}.
     */
    dispatchJob: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
/**
 *
 */
export declare abstract class PayDispatchJobSpecial extends Payload {
    /**
     *
     * @returns
     */
    getAction(): {
        kind: ActionType;
        object: SyncName;
        filter: string;
        batch: boolean;
    };
}
//# sourceMappingURL=PayDispatchJob.d.ts.map