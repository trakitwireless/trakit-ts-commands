import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepMaintenanceScheduleBatchMerge extends Reply {
    /**
     *
     */
    maintenanceSchedules: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepMaintenanceScheduleBatchMerge.d.ts.map