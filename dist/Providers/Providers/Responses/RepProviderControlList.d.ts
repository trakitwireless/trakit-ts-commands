import { codified, email, guid, JsonObject, nothing, Provider, ProviderControl, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerControls}.
 */
export declare abstract class RepProviderControlList extends ReplySyncListPiece<ProviderControl> {
    /**
     * The list of requested {@link ProviderControl}s.
     */
    providerControls: ProviderControl[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderControl[];
    protected _createBlank(): Provider;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderControlListByCompany extends RepProviderControlList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderControlListByConfig extends RepProviderControlList {
    /**
     * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
     */
    config: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderControlList.d.ts.map