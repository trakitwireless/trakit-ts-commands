import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link providerConfiguration}.
 */
export declare class RepProviderConfigurationDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderConfiguration}.
     */
    providerConfiguration: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigurationDelete.d.ts.map