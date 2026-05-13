import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link providerConfig}.
 */
export declare class RepProviderConfigDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderConfig}.
     */
    providerConfig: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigDelete.d.ts.map