import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamAssetDispatchMerge } from "./Parameters/ParamAssetDispatchMerge";
/**
 * Container for the command to creates a new, or updates an existing {@link AssetDispatch}.
 */
export declare class PayAssetDispatchMerge extends Payload {
    /**
     * Parameters given to update an {@link AssetDispatch}.
     */
    assetDispatch: ParamAssetDispatchMerge;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetDispatchMerge.d.ts.map