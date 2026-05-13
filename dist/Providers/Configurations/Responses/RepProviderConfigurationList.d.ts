import { codified, email, guid, JsonObject, nothing, ProviderConfiguration, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerConfigurations}.
 */
export declare abstract class RepProviderConfigurationList extends ReplySyncList<ProviderConfiguration> {
    /**
     * The list of requested {@link ProviderConfiguration}s.
     */
    providerConfigurations: ProviderConfiguration[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderConfiguration[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepProviderConfigurationListByCompany extends RepProviderConfigurationList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfiguration], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigurationList.d.ts.map