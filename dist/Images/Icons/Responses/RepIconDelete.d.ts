import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link icon}.
 */
export declare class RepIconDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Icon}.
     */
    icon: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepIconDelete.d.ts.map