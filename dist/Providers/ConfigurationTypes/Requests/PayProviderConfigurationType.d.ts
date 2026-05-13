import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link providerConfigurationType} object.
 */
export declare abstract class PayProviderConfigurationType extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ProviderConfigurationType}.
     */
    providerConfigurationType: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationType.d.ts.map