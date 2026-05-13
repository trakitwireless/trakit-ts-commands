import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link provider}.
 */
export declare class RepProviderDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Provider}.
     */
    provider: ContentIdendifierDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): string;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderDelete.d.ts.map