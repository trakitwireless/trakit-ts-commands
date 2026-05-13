import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link picture}.
 */
export declare class RepPictureBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Picture}.
     */
    pictures: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepPictureBatchDelete.d.ts.map