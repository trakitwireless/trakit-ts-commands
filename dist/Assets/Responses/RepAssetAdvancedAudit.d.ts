import { AssetAdvanced, JsonObject } from "@trakit/objects";
import { ContentAudit } from "../../API/Responses/Content/ContentAudit";
import { ReplyAudit } from "../../API/Responses/ReplyAudit";
/**
 * A container for {@link AssetAdvanced} audit history.
 */
export declare class RepAssetAdvancedAudit extends ReplyAudit<AssetAdvanced> {
    /**
     * The collection of audit details for the requested {@link AssetAdvanced}.
     */
    assetAdvanceds: ContentAudit<AssetAdvanced>[];
    constructor(json: JsonObject);
    getHistory(): ContentAudit<AssetAdvanced>[];
}
//# sourceMappingURL=RepAssetAdvancedAudit.d.ts.map