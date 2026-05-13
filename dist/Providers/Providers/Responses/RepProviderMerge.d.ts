import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdendifierCompany } from "../../../API/Responses/Content/ContentIdendifierCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link provider}.
 */
export declare class RepProviderMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    provider: ContentIdendifierCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepProviderMerge.d.ts.map