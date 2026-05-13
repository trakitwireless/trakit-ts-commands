import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";
/**
 * Creates a new or updates an existing {@link UserGroup}.
 */
export declare class PayUserGroupMerge extends Payload implements IPaySingle {
    /**
     * Parameters given to create or update a {@link UserGroup}.
     */
    userGroup: ParamUserGroupMerge;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserGroupMerge.d.ts.map