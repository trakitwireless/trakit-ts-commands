import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfig } from "./PayProviderConfig";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ProviderConfig}.
 */
export declare class PayProviderConfigGet extends PayProviderConfig implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderConfig} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigGet.d.ts.map