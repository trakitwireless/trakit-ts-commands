import { Asset, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link asset}.
 */
export declare class RepAssetGet extends ReplySyncGet<Asset> {
    /**
     * The requested {@link Asset}.
     */
    asset: Asset | nothing;
    constructor(json: JsonObject);
    getObject(): Asset;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetGet.d.ts.map