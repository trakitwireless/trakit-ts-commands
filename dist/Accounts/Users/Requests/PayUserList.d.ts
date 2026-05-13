import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets details of the specified {@link user}.
 */
export declare abstract class PayUserList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link User}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayUserListByCompany extends PayUserList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 *
 */
export declare class PayUserListByUserGroup extends PayUserList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserList.d.ts.map