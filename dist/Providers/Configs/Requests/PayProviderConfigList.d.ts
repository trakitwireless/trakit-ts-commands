import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
/**
 * Gets details of the specified {@link providerConfig}.
 */
export declare abstract class PayProviderConfigList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link ProviderConfig}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayProviderConfigListByCompany extends PayProviderConfigList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link ProviderScript.id} of the collection.
 */
export declare class PayProviderConfigListByProviderScript extends PayProviderConfigList {
    /**
     * Identifier of the {@link ProviderScript} to which this collection belongs.
     */
    providerScript: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderConfigList.d.ts.map