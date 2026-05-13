import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { ParamAssetMessageMerge } from "./Parameters/ParamAssetMessageMerge";
/**
 *
 */
export declare class PayAssetMessageBatchMerge extends Payload {
    /**
     *
     */
    assetMessages: ParamAssetMessageMerge[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMessageBatchMerge.d.ts.map