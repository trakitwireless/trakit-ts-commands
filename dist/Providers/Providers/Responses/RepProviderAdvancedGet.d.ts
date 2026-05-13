import { JsonObject, nothing, Provider, ProviderAdvanced, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link providerAdvanced}.
 */
export declare class RepProviderAdvancedGet extends ReplySyncGetPiece<ProviderAdvanced> {
    /**
     * The requested {@link ProviderAdvanced}.
     */
    providerAdvanced: ProviderAdvanced | nothing;
    constructor(json: JsonObject);
    protected _createBlank(): Provider;
    getObject(): ProviderAdvanced;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderAdvancedGet.d.ts.map