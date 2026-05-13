import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
/**
 *
 */
export declare class RepAssetMessageBatchMerge extends Reply {
    /**
     *
     */
    assetMessages: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepAssetMessageBatchMerge.d.ts.map