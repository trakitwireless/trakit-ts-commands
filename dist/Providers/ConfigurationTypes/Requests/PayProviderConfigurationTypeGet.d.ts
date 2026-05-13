import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfigurationType } from "./PayProviderConfigurationType";
/**
 * Gets details of the specified {@link ProviderConfigurationType}.
 */
export declare class PayProviderConfigurationTypeGet extends PayProviderConfigurationType implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link ProviderConfigurationType} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationTypeGet.d.ts.map