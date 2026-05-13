import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets details of the specified {@link providerConfigurationType}.
 */
export declare class PayProviderConfigurationTypeList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link ProviderConfigurationType}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigurationTypeList.d.ts.map