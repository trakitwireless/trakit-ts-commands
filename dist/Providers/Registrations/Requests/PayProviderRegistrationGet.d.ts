import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderRegistration } from "./PayProviderRegistration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ProviderRegistration}.
 */
export declare class PayProviderRegistrationGet extends PayProviderRegistration implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderRegistration} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderRegistrationGet.d.ts.map