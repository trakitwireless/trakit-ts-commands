import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderConfigurationMerge } from "./Parameters/ParamProviderConfigurationMerge";
/**
 *
 */
export declare class PayProviderConfigurationBatchMerge extends Payload {
    /**
     *
     */
    providerConfigurations: ParamProviderConfigurationMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationBatchMerge.d.ts.map