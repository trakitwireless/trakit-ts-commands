import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link providerScript} object.
 */
export declare abstract class PayProviderScript extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ProviderScript}.
     */
    providerScript: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderScript.d.ts.map