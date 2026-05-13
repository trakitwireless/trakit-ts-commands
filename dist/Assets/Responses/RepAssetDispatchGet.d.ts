import { Asset, AssetDispatch, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link assetDispatch}.
 */
export declare class RepAssetDispatchGet extends ReplySyncGetPiece<AssetDispatch> {
    /**
     * The requested {@link AssetDispatch}.
     */
    assetDispatch: AssetDispatch | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Asset;
    getObject(): AssetDispatch;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetDispatchGet.d.ts.map