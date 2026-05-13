import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link providerConfig}.
 */
export declare class RepProviderConfigMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    providerConfig: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepProviderConfigMerge.d.ts.map