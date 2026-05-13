import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";
/**
 * Creates a new or updates an existing {@link ProviderConfiguration}.
 */
export declare class PayProviderConfigurationMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ProviderConfiguration}.
     */
    providerConfiguration: ParamProviderConfigurationMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationMerge.d.ts.map