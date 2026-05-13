import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";
/**
 * Creates a new or updates an existing {@link ProviderConfig}.
 */
export declare class PayProviderConfigMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ProviderConfig}.
     */
    providerConfig: ParamProviderConfigMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigMerge.d.ts.map