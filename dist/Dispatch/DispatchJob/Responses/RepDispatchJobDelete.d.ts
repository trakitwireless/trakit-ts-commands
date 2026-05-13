import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link dispatchJob}.
 */
export declare class RepDispatchJobDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link DispatchJob}.
     */
    dispatchJob: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDispatchJobDelete.d.ts.map