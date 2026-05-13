import { Asset, AssetAdvanced, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link assetAdvanced}.
 */
export declare class RepAssetAdvancedGet extends ReplySyncGetPiece<AssetAdvanced> {
    /**
     * The requested {@link AssetAdvanced}.
     */
    assetAdvanced: AssetAdvanced | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Asset;
    getObject(): AssetAdvanced;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetAdvancedGet.d.ts.map