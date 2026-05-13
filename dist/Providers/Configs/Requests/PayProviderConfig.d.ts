import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link providerConfig} object.
 */
export declare abstract class PayProviderConfig extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link ProviderConfig}.
     */
    providerConfig: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfig.d.ts.map