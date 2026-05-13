import { JsonObject, nothing, ProviderConfig, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerConfig}.
 */
export declare class RepProviderConfigGet extends ReplySyncGet<ProviderConfig> {
    /**
     * The requested {@link ProviderConfig}.
     */
    providerConfig: ProviderConfig | nothing;
    constructor(json: JsonObject);
    getObject(): ProviderConfig;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigGet.d.ts.map