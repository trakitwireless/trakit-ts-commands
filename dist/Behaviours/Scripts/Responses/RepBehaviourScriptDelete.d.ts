import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link behaviourScript}.
 */
export declare class RepBehaviourScriptDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link BehaviourScript}.
     */
    behaviourScript: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourScriptDelete.d.ts.map