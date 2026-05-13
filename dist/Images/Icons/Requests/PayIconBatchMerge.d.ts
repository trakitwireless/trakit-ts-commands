import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";
/**
 *
 */
export declare class PayIconBatchMerge extends Payload {
    /**
     *
     */
    icons: ParamIconMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayIconBatchMerge.d.ts.map