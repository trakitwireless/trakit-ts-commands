import { codified, email, guid, JsonObject, nothing, ProviderConfig, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerConfigs}.
 */
export declare abstract class RepProviderConfigList extends ReplySyncList<ProviderConfig> {
    /**
     * The list of requested {@link ProviderConfig}s.
     */
    providerConfigs: ProviderConfig[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderConfig[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepProviderConfigListByCompany extends RepProviderConfigList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfig], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link ProviderScript.id} of the collection.
 */
export declare class RepProviderConfigListByProviderScript extends RepProviderConfigList {
    /**
     * Identifier of the {@link ProviderScript} to which this collection belongs.
     */
    providerScript: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfig], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigList.d.ts.map