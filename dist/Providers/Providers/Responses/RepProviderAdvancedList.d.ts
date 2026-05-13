import { codified, email, guid, JsonObject, nothing, Provider, ProviderAdvanced, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerAdvanceds}.
 */
export declare abstract class RepProviderAdvancedList extends ReplySyncListPiece<ProviderAdvanced> {
    /**
     * The list of requested {@link ProviderAdvanced}s.
     */
    providerAdvanceds: ProviderAdvanced[] | nothing;
    constructor(json: JsonObject);
    getList(): ProviderAdvanced[];
    protected _createBlank(): Provider;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderAdvancedListByCompany extends RepProviderAdvancedList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderAdvanced], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepProviderAdvancedListByConfig extends RepProviderAdvancedList {
    /**
     * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
     */
    config: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ProviderAdvanced], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepProviderAdvancedList.d.ts.map