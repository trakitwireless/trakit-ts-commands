import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link FormResult} object.
 */
export declare abstract class PayFormResult extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link FormResult}.
     */
    formResult: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormResult.d.ts.map