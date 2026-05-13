import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParentDeleted } from "../../API/Responses/Content/ContentIdParentDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link company}.
 */
export declare class RepCompanyBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Company}.
     */
    companies: ContentIdParentDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdParentDeleted[];
}
//# sourceMappingURL=RepCompanyBatchDelete.d.ts.map