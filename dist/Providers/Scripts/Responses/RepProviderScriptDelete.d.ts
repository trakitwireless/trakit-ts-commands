import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
/**
 * A container for the {@link providerScript}.
 */
export declare class RepProviderScriptDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderScript}.
     */
    providerScript: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderScriptDelete.d.ts.map