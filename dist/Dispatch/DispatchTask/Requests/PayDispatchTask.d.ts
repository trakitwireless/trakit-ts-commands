import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link dispatchTask} object.
 */
export declare abstract class PayDispatchTask extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link DispatchTask}.
     */
    dispatchTask: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchTask.d.ts.map