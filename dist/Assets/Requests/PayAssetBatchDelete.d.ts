import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * import { codified } from "@trakit/objects";

 */
export declare class PayAssetBatchDelete extends Payload {
    /**
     *
     */
    assets: ParamId[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetBatchDelete.d.ts.map