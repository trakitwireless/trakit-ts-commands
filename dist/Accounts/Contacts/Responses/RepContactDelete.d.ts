import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link contact}.
 */
export declare class RepContactDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Contact}.
     */
    contact: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepContactDelete.d.ts.map