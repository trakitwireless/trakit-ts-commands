import { JsonObject, nothing, ProviderRegistration, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerRegistration}.
 */
export declare class RepProviderRegistrationGet extends ReplySyncGet<ProviderRegistration> {
    /**
     * The requested {@link ProviderRegistration}.
     */
    providerRegistration: ProviderRegistration | nothing;
    constructor(json: JsonObject);
    getObject(): ProviderRegistration;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderRegistrationGet.d.ts.map