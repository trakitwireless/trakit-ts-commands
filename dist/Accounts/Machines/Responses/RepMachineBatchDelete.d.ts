import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link machine}.
 */
export declare class RepMachineBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link Machine}.
     */
    machines: ContentKeyDeleted[] | nothing;
    constructor(json: JsonObject);
    protected _getKeys(): string[];
    getCompanyId(): ulong;
    getResults(): ContentKeyDeleted[];
}
//# sourceMappingURL=RepMachineBatchDelete.d.ts.map