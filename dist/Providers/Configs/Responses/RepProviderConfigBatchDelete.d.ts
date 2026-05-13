import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link providerConfig}.
 */
export declare class RepProviderConfigBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderConfig}.
     */
    providerConfigs: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepProviderConfigBatchDelete.d.ts.map