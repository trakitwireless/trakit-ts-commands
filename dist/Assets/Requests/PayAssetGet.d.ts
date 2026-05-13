import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
/**
 * Gets details of the specified {@link Asset}.
 */
export declare class PayAssetGet extends PayAsset implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link Asset} (if it exists).
     */
    includeDeleted: boolean;
    /**
     * When true, the command will also return {@link AssetMessage}s for the asset.
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
//# sourceMappingURL=PayAssetGet.d.ts.map