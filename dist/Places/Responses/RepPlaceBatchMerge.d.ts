import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
/**
 *
 */
export declare class RepPlaceBatchMerge extends Reply {
    /**
     *
     */
    places: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepPlaceBatchMerge.d.ts.map