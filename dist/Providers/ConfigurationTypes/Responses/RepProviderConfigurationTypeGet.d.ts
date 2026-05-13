import { JsonObject, nothing, ProviderConfigurationType, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerConfigurationType}.
 */
export declare class RepProviderConfigurationTypeGet extends ReplySyncGet<ProviderConfigurationType> {
    /**
     * The requested {@link ProviderConfigurationType}.
     */
    providerConfigurationType: ProviderConfigurationType | nothing;
    constructor(json: JsonObject);
    getObject(): ProviderConfigurationType;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigurationTypeGet.d.ts.map