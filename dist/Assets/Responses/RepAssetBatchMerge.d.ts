import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
/**
 * A container for the {@link assets}.
 */
export declare class RepAssetBatchMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    assets: ContentIdCompany[] | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepAssetBatchMerge.d.ts.map