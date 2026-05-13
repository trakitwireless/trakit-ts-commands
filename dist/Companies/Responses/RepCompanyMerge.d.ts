import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { Reply } from "../../API/Responses/Reply";
/**
 * A container for the {@link company}.
 */
export declare class RepCompanyMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    company: ContentIdParent | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepCompanyMerge.d.ts.map