import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link picture}.
 */
export declare class RepPictureMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    picture: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepPictureMerge.d.ts.map