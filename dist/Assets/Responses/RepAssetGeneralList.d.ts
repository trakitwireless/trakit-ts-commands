import { Asset, AssetGeneral, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link assetGenerals}.
 */
export declare abstract class RepAssetGeneralList extends ReplySyncListPiece<AssetGeneral> {
    /**
     * The list of requested {@link AssetGeneral}s.
     */
    assetGenerals: AssetGeneral[] | nothing;
    constructor(json: JsonObject);
    getList(): AssetGeneral[];
    protected _createBlank(): Asset;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetGeneralListByCompany extends RepAssetGeneralList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetGeneral], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetGeneralListByCompanyAndLabels extends RepAssetGeneralListByCompany {
    /**
     * The labels given as input.
     * @see {@link AssetGeneral.labels}
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetGeneral], index: number): boolean;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetGeneralListByCompanyAndRefPairs extends RepAssetGeneralListByCompany {
    /**
     * The reference string given as input.
     * @see {@link AssetGeneral.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetGeneral], index: number): boolean;
}
//# sourceMappingURL=RepAssetGeneralList.d.ts.map