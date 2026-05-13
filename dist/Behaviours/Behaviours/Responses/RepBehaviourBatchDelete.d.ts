import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link behaviour}.
 */
export declare class RepBehaviourBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Behaviour}.
     */
    behaviours: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepBehaviourBatchDelete.d.ts.map