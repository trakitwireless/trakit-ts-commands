import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamUserGroupMerge } from "./Parameters/ParamUserGroupMerge";
/**
 *
 */
export declare class PayUserGroupBatchMerge extends Payload {
    /**
     *
     */
    userGroups: ParamUserGroupMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserGroupBatchMerge.d.ts.map