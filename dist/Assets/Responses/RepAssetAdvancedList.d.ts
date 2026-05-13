import { Asset, AssetAdvanced, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link assetAdvanceds}.
 */
export declare abstract class RepAssetAdvancedList extends ReplySyncListPiece<AssetAdvanced> {
    /**
     * The list of requested {@link AssetAdvanced}s.
     */
    assetAdvanceds: AssetAdvanced[] | nothing;
    constructor(json: JsonObject);
    getList(): AssetAdvanced[];
    protected _createBlank(): Asset;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetAdvancedListByCompany extends RepAssetAdvancedList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetAdvanced], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetAdvancedListByCompanyAndLabels extends RepAssetAdvancedListByCompany {
    /**
     * The labels given as input.
     * @see {@link AssetGeneral.labels}
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetAdvanced], index: number): boolean;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetAdvancedListByCompanyAndRefPairs extends RepAssetAdvancedListByCompany {
    /**
     * The reference string given as input.
     * @see {@link AssetGeneral.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetAdvanced], index: number): boolean;
}
//# sourceMappingURL=RepAssetAdvancedList.d.ts.map