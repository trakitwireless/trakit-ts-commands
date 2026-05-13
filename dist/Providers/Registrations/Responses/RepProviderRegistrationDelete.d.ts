import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentCodeDeleted } from "../../../API/Responses/Content/ContentCodeDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";
/**
 * A container for the {@link providerRegistration}.
 */
export declare class RepProviderRegistrationDelete extends ReplySyncDelete {
    /**
     * Details about deleting/restoring the requested {@link ProviderRegistration}.
     */
    providerRegistration: ContentCodeDeleted | nothing;
    constructor(json: JsonObject);
    getKey(): string;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderRegistrationDelete.d.ts.map