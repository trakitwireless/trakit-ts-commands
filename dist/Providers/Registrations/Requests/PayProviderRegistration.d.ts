import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamCode } from "../../../API/Requests/Parameters/ParamCode";
/**
 * A container for the {@link providerRegistration} object.
 */
export declare abstract class PayProviderRegistration extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ProviderRegistration}.
     */
    providerRegistration: ParamCode;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderRegistration.d.ts.map