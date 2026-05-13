import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets details of the specified {@link provider}.
 */
export declare abstract class PayProviderList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return suspended {@link ProviderControl}s.
     */
    includeSuspended: boolean;
    /**
     * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayProviderListByCompany extends PayProviderList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayProviderListByConfig extends PayProviderList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    config: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderList.d.ts.map