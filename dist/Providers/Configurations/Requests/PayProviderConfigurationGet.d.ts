import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfiguration } from "./PayProviderConfiguration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link ProviderConfiguration}.
 */
export declare class PayProviderConfigurationGet extends PayProviderConfiguration implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderConfiguration} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationGet.d.ts.map