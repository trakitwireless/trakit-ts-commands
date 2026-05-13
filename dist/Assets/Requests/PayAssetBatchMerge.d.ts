import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";
/**
 *
 */
export declare class PayAssetBatchMerge extends Payload {
    /**
     *
     */
    assets: ParamAssetMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetBatchMerge.d.ts.map