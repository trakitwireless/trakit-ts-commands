import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
/**
 *
 */
export declare class RepMaintenanceJobBatchMerge extends Reply {
    /**
     *
     */
    maintenanceJobs: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepMaintenanceJobBatchMerge.d.ts.map