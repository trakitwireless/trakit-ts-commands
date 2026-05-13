import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentKeyDeleted } from "../../../API/Responses/Content/ContentKeyDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link machine}.
 */
export declare class RepMachineDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link Machine}.
     */
    machine: ContentKeyDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): string;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMachineDelete.d.ts.map