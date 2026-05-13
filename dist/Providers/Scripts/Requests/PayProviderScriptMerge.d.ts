import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderScriptMerge } from "./Parameters/ParamProviderScriptMerge";
/**
 * Creates a new or updates an existing {@link ProviderScript}.
 */
export declare class PayProviderScriptMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link ProviderScript}.
     */
    providerScript: ParamProviderScriptMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderScriptMerge.d.ts.map