import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { PayUserGroup } from "./PayUserGroup";
/**
 * Gets details of the specified {@link UserGroup}.
 */
export declare class PayUserGroupGet extends PayUserGroup implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link UserGroup} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserGroupGet.d.ts.map