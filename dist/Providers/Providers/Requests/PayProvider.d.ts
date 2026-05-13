import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamIdentifier } from "../../../API/Requests/Parameters/ParamIdentifier";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link provider} object.
 */
export declare abstract class PayProvider extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link Provider}.
     */
    provider: ParamIdentifier;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProvider.d.ts.map