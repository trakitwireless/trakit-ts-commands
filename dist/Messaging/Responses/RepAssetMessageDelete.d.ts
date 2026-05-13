import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link assetMessage}.
 */
export declare class RepAssetMessageDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link AssetMessage}.
     */
    assetMessage: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetMessageDelete.d.ts.map