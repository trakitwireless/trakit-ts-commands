import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link document}.
 */
export declare class RepDocumentDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Document}.
     */
    document: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepDocumentDelete.d.ts.map