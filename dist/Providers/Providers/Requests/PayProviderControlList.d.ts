import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets a list of {@link ProviderControl}s.
 */
export declare abstract class PayProviderControlList extends Payload implements IPayDeletable, IPaySuspendable {
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
 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
 */
export declare class PayProviderControlListByCompany extends PayProviderControlList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
 */
export declare class PayProviderControlListByConfig extends PayProviderControlList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    config: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderControlList.d.ts.map