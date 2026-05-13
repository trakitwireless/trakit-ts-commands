import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link picture}.
 */
export declare class RepPictureDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Picture}.
     */
    picture: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepPictureDelete.d.ts.map