import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link icon}.
 */
export declare class RepIconMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    icon: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepIconMerge.d.ts.map