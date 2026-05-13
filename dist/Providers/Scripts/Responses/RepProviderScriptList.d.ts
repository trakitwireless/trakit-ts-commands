import { codified, email, guid, JsonObject, nothing, ProviderScript, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerScripts}.
 */
export declare abstract class RepProviderScriptList extends ReplySyncList<ProviderScript> {
    /**
     * The list of requested {@link ProviderScript}s.
     */
    providerScripts: ProviderScript[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderScript[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepProviderScriptListByCompany extends RepProviderScriptList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderScript], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderScriptList.d.ts.map