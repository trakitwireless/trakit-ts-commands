import { JsonObject, nothing, ProviderScript, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerScript}.
 */
export declare class RepProviderScriptGet extends ReplySyncGet<ProviderScript> {
    /**
     * The requested {@link ProviderScript}.
     */
    providerScript: ProviderScript | nothing;
    constructor(json: JsonObject);
    getObject(): ProviderScript;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderScriptGet.d.ts.map