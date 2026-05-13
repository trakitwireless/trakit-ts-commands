import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
/**
 * A container for the {@link place}.
 */
export declare class RepPlaceDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Place}.
     */
    place: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPlaceDelete.d.ts.map