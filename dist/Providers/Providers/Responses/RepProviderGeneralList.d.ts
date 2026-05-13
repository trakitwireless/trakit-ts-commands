import { codified, email, guid, JsonObject, nothing, Provider, ProviderGeneral, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerGenerals}.
 */
export declare abstract class RepProviderGeneralList extends ReplySyncListPiece<ProviderGeneral> {
    /**
     * The list of requested {@link ProviderGeneral}s.
     */
    providerGenerals: ProviderGeneral[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderGeneral[];
    protected _createBlank(): Provider;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderGeneralListByCompany extends RepProviderGeneralList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderGeneral], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderGeneralListByConfig extends RepProviderGeneralList {
    /**
     * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
     */
    config: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Provider], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderGeneralList.d.ts.map