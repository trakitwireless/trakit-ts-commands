import { JsonObject } from "@trakit/objects";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class PayUserBatchDelete extends Payload {
    /**
     *
     */
    users: ParamLogin[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserBatchDelete.d.ts.map