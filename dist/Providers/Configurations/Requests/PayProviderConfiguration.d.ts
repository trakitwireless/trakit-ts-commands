import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link providerConfiguration} object.
 */
export declare abstract class PayProviderConfiguration extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ProviderConfiguration}.
     */
    providerConfiguration: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfiguration.d.ts.map