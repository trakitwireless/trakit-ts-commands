import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link document}.
 */
export declare class RepDocumentMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    document: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepDocumentMerge.d.ts.map