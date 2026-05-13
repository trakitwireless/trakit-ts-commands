import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepBehaviourBatchMerge extends Reply {
    /**
     *
     */
    behaviours: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepBehaviourBatchMerge.d.ts.map