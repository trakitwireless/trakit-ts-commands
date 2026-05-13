import { Asset, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link assets}.
 */
export declare abstract class RepAssetList extends ReplySyncList<Asset> {
    /**
     * The list of requested {@link Asset}s.
     */
    assets: Asset[] | nothing;
    constructor(json: JsonObject);
    getList(): Asset[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepAssetListByCompany extends RepAssetList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the codified {@link Company.labels} keys used to filter the collection.
 */
export declare class RepAssetListByCompanyAndLabels extends RepAssetListByCompany {
    /**
     * The parsed labels given as input.
     * @see {@link AssetGeneral.labels}
     */
    labels: codified[] | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean;
}
/**
 * Contains the {@link AssetGeneral.references} used to filter the collection.
 */
export declare class RepAssetListByCompanyAndRefPairs extends RepAssetListByCompany {
    /**
     * The parsed references given as input.
     * @see {@link AssetGeneral.references}
     */
    references: Map<string, string> | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean;
}
//# sourceMappingURL=RepAssetList.d.ts.map