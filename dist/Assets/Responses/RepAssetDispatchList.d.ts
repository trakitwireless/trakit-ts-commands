import { Asset, AssetDispatch, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link assetDispatches}.
 */
export declare abstract class RepAssetDispatchList extends ReplySyncListPiece<AssetDispatch> {
    /**
     * The list of requested {@link AssetDispatch}es.
     */
    assetDispatches: AssetDispatch[] | nothing;
    constructor(json: JsonObject);
    getList(): AssetDispatch[];
    protected _createBlank(): Asset;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetDispatchListByCompany extends RepAssetDispatchList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetDispatch], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetDispatchListByCompanyAndLabels extends RepAssetDispatchListByCompany {
    /**
     * The labels given as input.
     * @see {@link AssetGeneral.labels}
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetDispatch], index: number): boolean;
}
/**
 * A container owner {@link Company} of the collection.
 */
export declare class RepAssetDispatchListByCompanyAndRefPairs extends RepAssetDispatchListByCompany {
    /**
     * The reference string given as input.
     * @see {@link AssetGeneral.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetDispatch], index: number): boolean;
}
//# sourceMappingURL=RepAssetDispatchList.d.ts.map