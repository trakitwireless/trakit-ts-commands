import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link providerScript}.
 */
export declare class RepProviderScriptBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderScript}.
     */
    providerScripts: ContentIdDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepProviderScriptBatchDelete.d.ts.map