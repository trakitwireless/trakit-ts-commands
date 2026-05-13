import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepDispatchJobBatchMerge extends Reply {
    /**
     *
     */
    dispatchJobs: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepDispatchJobBatchMerge.d.ts.map