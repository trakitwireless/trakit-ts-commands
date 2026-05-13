import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
/**
 * Gets details of the specified {@link AssetDispatch}.
 */
export declare class PayAssetDispatchGet extends PayAsset implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetDispatchGet.d.ts.map