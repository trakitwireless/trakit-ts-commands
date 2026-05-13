import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
/**
 *
 */
export declare class RepProviderBatchMerge extends Reply {
    /**
     *
     */
    providers: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepProviderBatchMerge.d.ts.map