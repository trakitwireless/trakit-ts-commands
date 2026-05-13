import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
/**
 * A container for the {@link providerConfiguration}.
 */
export declare class RepProviderConfigurationMerge extends Reply {
    /**
     * An object which contains the `id` and `company` keys when there is no error.
     */
    providerConfiguration: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepProviderConfigurationMerge.d.ts.map