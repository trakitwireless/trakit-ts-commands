import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
/**
 * For delete/restore commands, this contains the {@link Asset.id}, owning {@link Company.id}, and deleted state.
 */
export declare class RepAssetDelete extends ReplySyncDelete {
    /**
     *
     */
    asset: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetDelete.d.ts.map