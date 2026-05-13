import { JsonObject, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";
/**
 * A container for the {@link formTemplate}.
 */
export declare class RepFormTemplateBatchDelete extends ReplySyncBatchDelete {
    /**
     * Details about deleting/restoring the requested {@link FormTemplate}.
     */
    formTemplates: ContentIdDeleted[];
    constructor(json: JsonObject);
    protected _getKeys(): ulong[];
    getCompanyId(): ulong;
    getResults(): ContentIdDeleted[];
}
//# sourceMappingURL=RepFormTemplateBatchDelete.d.ts.map