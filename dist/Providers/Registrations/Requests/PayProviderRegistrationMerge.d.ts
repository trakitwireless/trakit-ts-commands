import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamProviderRegistrationMerge } from "./Parameters/ParamProviderRegistrationMerge";
/**
 * Creates a new or updates an existing {@link ProviderRegistration}.
 */
export declare class PayProviderRegistrationMerge extends Payload {
    /**
     * Parameters given to create or update a {@link ProviderRegistration}.
     */
    providerRegistration: ParamProviderRegistrationMerge;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderRegistrationMerge.d.ts.map