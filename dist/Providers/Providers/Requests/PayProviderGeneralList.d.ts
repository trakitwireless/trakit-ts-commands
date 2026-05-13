import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets a list of {@link ProviderGeneral}s.
 */
export declare abstract class PayProviderGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
    /**
     * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
     */
    includeDeleted: boolean;
    /**
     * When true, the command will also return suspended {@link ProviderGeneral}s.
     */
    includeSuspended: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 */
export declare class PayProviderGeneralListByCompany extends PayProviderGeneralList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 */
export declare class PayProviderGeneralListByConfig extends PayProviderGeneralList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    config: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderGeneralList.d.ts.map