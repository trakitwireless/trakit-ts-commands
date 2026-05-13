import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
/**
 * Gets details of the specified {@link AssetGeneral}.
 */
export declare class PayAssetGeneralGet extends PayAsset implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
     */
    includeDeleted: boolean;
    /**
     * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
     */
    includeMessages: boolean;
    /**
     * When true, the command will also return {@link DispatchTask}s for the asset.
     */
    includeTasks: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetGeneralGet.d.ts.map