import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link behaviourScript}.
 */
export declare class RepBehaviourScriptBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link BehaviourScript}.
     */
    behaviourScripts: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepBehaviourScriptBatchDelete.d.ts.map