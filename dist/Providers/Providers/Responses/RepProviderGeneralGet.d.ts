import { JsonObject, nothing, Provider, ProviderGeneral, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerGeneral}.
 */
export declare class RepProviderGeneralGet extends ReplySyncGetPiece<ProviderGeneral> {
    /**
     * The requested {@link Provider}.
     */
    providerGeneral: ProviderGeneral | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Provider;
    getObject(): ProviderGeneral;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderGeneralGet.d.ts.map