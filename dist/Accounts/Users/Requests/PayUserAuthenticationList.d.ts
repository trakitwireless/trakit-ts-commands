import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets a list of {@link UserAuthentication}s.
 */
export declare abstract class PayUserAuthenticationList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link UserAuthentication} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link UserAuthentication}s for the specified {@link Company}.
 */
export declare class PayUserAuthenticationListByCompany extends PayUserAuthenticationList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link UserAuthentication}s for the specified {@link UserGroup}.
 */
export declare class PayUserAuthenticationListByUserGroup extends PayUserAuthenticationList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserAuthenticationList.d.ts.map