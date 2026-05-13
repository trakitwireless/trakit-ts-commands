import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdendifierDeleted } from "../../../API/Responses/Content/ContentIdendifierDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link provider}.
 */
export declare class RepProviderBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Provider}.
     */
    providers: ContentIdendifierDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): string[];
    getCompanyId(): ulong;
    getResults(): ContentIdendifierDeleted[];
}
//# sourceMappingURL=RepProviderBatchDelete.d.ts.map