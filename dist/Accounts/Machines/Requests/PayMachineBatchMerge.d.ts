import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";
/**
 *
 */
export declare class PayMachineBatchMerge extends Payload {
    /**
     *
     */
    machines: ParamMachineMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMachineBatchMerge.d.ts.map