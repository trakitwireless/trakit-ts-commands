import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link assetMessage}.
 */
export declare class RepAssetMessageBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link AssetMessage}.
     */
    assetMessages: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepAssetMessageBatchDelete.d.ts.map