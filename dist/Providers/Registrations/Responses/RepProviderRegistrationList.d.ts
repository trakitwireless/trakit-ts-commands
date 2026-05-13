import { codified, email, guid, JsonObject, nothing, ProviderRegistration, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerRegistrations}.
 */
export declare abstract class RepProviderRegistrationList extends ReplySyncList<ProviderRegistration> {
    /**
     * The list of requested {@link ProviderRegistration}s.
     */
    providerRegistrations: ProviderRegistration[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderRegistration[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepProviderRegistrationListByCompany extends RepProviderRegistrationList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderRegistration], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderRegistrationList.d.ts.map