import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 *
 */
export declare class PayProviderConfigurationBatchDelete extends Payload {
    /**
     *
     */
    providerConfigurations: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationBatchDelete.d.ts.map