import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link formResult}.
 */
export declare class RepFormResultDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link FormResult}.
     */
    formResult: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormResultDelete.d.ts.map