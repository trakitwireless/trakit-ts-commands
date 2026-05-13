import { codified, email, guid, JsonObject, nothing, Provider, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providers}.
 */
export declare abstract class RepProviderList extends ReplySyncList<Provider> {
    /**
     * The list of requested {@link Provider}s.
     */
    providers: Provider[] | nothing;
    constructor(json: JsonObject);
    getList(): Provider[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepProviderListByCompany extends RepProviderList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Provider], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderListByConfig extends RepProviderList {
    /**
     * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
     */
    config: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Provider], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderList.d.ts.map