import { JsonObject, nothing } from "@trakit/objects";
import { ContentKeyCompany } from "../../../API/Responses/Content/ContentKeyCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class RepMachineBatchMerge extends Reply {
    /**
     *
     */
    machines: ContentKeyCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepMachineBatchMerge.d.ts.map