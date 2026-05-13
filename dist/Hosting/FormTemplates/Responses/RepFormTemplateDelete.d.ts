import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
/**
 * A container for the {@link formTemplate}.
 */
export declare class RepFormTemplateDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link FormTemplate}.
     */
    formTemplate: ContentIdDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): ulong;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormTemplateDelete.d.ts.map