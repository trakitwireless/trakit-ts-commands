import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
/**
 * Gets a list of {@link ProviderAdvanced}s.
 */
export declare abstract class PayProviderAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
    /**
     * When true, the command will also return suspended {@link ProviderAdvanced}s.
     */
    includeSuspended: boolean;
    /**
     * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 */
export declare class PayProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 */
export declare class PayProviderAdvancedListByConfig extends PayProviderAdvancedList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    config: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayProviderAdvancedList.d.ts.map