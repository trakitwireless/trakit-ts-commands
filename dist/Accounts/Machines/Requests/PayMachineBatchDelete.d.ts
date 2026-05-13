import { JsonObject } from "@trakit/objects";
import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class PayMachineBatchDelete extends Payload {
    /**
     *
     */
    machines: ParamKey[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayMachineBatchDelete.d.ts.map