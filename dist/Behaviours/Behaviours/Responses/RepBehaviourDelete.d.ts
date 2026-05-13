import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link behaviour}.
 */
export declare class RepBehaviourDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Behaviour}.
     */
    behaviour: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepBehaviourDelete.d.ts.map