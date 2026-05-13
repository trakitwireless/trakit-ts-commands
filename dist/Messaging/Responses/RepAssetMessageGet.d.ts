import { JsonObject, ulong } from "@trakit/objects";
import { AssetMessage, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link assetMessage}.
 */
export declare class RepAssetMessageGet extends ReplySyncGet<AssetMessage> {
    /**
     * The requested {@link AssetMessage}.
     */
    assetMessage: AssetMessage | nothing;
    constructor(json: JsonObject);
    getObject(): AssetMessage;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetMessageGet.d.ts.map