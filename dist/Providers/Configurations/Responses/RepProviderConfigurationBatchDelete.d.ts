import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link providerConfiguration}.
 */
export declare class RepProviderConfigurationBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderConfiguration}.
     */
    providerConfigurations: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepProviderConfigurationBatchDelete.d.ts.map