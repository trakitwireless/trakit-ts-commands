import { JsonObject, nothing, Provider, ProviderControl, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerControl}.
 */
export declare class RepProviderControlGet extends ReplySyncGetPiece<ProviderControl> {
    /**
     * The requested {@link ProviderControl}.
     */
    providerControl: ProviderControl | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Provider;
    getObject(): ProviderControl;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderControlGet.d.ts.map