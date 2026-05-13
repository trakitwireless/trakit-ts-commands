import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
/**
 *
 */
export declare class RepCompanyBatchMerge extends Reply {
    /**
     *
     */
    companies: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepCompanyBatchMerge.d.ts.map