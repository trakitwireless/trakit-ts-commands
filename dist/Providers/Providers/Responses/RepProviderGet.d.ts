import { JsonObject, nothing, Provider, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link provider}.
 */
export declare class RepProviderGet extends ReplySyncGet<Provider> {
    /**
     * The requested {@link Provider}.
     */
    provider: Provider | nothing;
    constructor(json: JsonObject);
    getObject(): Provider;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderGet.d.ts.map