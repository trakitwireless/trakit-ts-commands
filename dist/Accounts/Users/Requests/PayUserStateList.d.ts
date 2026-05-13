import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets a list of {@link UserState}s.
 */
export declare abstract class PayUserStateList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link UserState} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link UserState}s for the specified {@link Company}.
 */
export declare class PayUserStateListByCompany extends PayUserStateList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link UserState}s for the specified {@link UserGroup}.
 */
export declare class PayUserStateListByUserGroup extends PayUserStateList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserStateList.d.ts.map