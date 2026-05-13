import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";
/**
 *
 */
export declare class PayProviderScriptBatchMerge extends Payload {
    /**
     *
     */
    providerScripts: ParamProviderScriptMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderScriptBatchMerge.d.ts.map