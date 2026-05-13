import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamUserMerge } from "./Parameters/ParamUserMerge";
/**
 *
 */
export declare class PayUserBatchMerge extends Payload {
    /**
     *
     */
    users: ParamUserMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserBatchMerge.d.ts.map