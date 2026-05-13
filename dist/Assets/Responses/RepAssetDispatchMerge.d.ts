import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
/**
 * A container for the {@link assetDispatch}.
 */
export declare class RepAssetDispatchMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    assetDispatch: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepAssetDispatchMerge.d.ts.map