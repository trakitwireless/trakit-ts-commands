import { AssetAdvanced, JsonObject, nothing } from "@trakit/objects";
import { ReplyAudit } from "../../API/Responses/ReplyAudit";
/**
 * A container for the {@link assetAdvanced}.
 */
export declare class RepAssetAdvancedAudit extends ReplyAudit<AssetAdvanced> {
    /**
     * The requested {@link AssetAdvanced}.
     */
    assetAdvanceds: AssetAdvanced[] | nothing;
    constructor(json: JsonObject);
    getList(): AssetAdvanced[];
}
//# sourceMappingURL=RepAssetAdvancedAudit.d.ts.map