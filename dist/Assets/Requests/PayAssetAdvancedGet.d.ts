import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
/**
 * Gets import { codified } from "@trakit/objects";
details of the specified {@link AssetAdvanced}.
 */
export declare class PayAssetAdvancedGet extends PayAsset implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetAdvancedGet.d.ts.map