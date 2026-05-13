import { codified, email, guid, JsonObject, nothing, ProviderConfigurationType, ulong } from "@trakit/objects";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerConfigurationTypes}.
 */
export declare class RepProviderConfigurationTypeList extends ReplySyncList<ProviderConfigurationType> {
    /**
     * The list of requested {@link ProviderConfigurationType}s.
     */
    providerConfigurationTypes: ProviderConfigurationType[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderConfigurationType[];
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfigurationType], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderConfigurationTypeList.d.ts.map