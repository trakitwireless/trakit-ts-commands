import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamProviderConfigMerge } from "./Parameters/ParamProviderConfigMerge";
/**
 *
 */
export declare class PayProviderConfigBatchMerge extends Payload {
    /**
     *
     */
    providerConfigs: ParamProviderConfigMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigBatchMerge.d.ts.map