import { Asset, AssetGeneral, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link assetGeneral}.
 */
export declare class RepAssetGeneralGet extends ReplySyncGetPiece<AssetGeneral> {
    /**
     * The requested {@link Asset}.
     */
    assetGeneral: AssetGeneral | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Asset;
    getObject(): AssetGeneral;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetGeneralGet.d.ts.map