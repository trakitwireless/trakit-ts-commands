import { JsonObject, nothing, ProviderConfiguration, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerConfiguration}.
 */
export declare class RepProviderConfigurationGet extends ReplySyncGet<ProviderConfiguration> {
    /**
     * The requested {@link ProviderConfiguration}.
     */
    providerConfiguration: ProviderConfiguration | nothing;
    constructor(json: JsonObject);
    getObject(): ProviderConfiguration;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigurationGet.d.ts.map