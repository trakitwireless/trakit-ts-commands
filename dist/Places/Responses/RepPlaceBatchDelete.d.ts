import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
/**
 * A container for the {@link place}.
 */
export declare class RepPlaceBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Place}.
     */
    places: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepPlaceBatchDelete.d.ts.map