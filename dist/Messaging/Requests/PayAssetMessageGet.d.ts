import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { PayAssetMessage } from "./PayAssetMessage";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
/**
 * Gets details of the specified {@link AssetMessage}.
 */
export declare class PayAssetMessageGet extends PayAssetMessage implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link AssetMessage} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMessageGet.d.ts.map