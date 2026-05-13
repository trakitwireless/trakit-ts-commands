import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link formTemplate}.
 */
export declare class RepFormTemplateMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    formTemplate: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepFormTemplateMerge.d.ts.map