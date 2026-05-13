import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link dispatchTask}.
 */
export declare class RepDispatchTaskDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link DispatchTask}.
     */
    dispatchTask: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDispatchTaskDelete.d.ts.map