import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
/**
 * A container for the {@link place}.
 */
export declare class RepPlaceMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    place: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepPlaceMerge.d.ts.map